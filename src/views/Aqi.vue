<template>
  <div class="container-fluid">
    <div class="sel-Area">
        <Selector :countyMenu="county" @selTarget="toFilter"></Selector>
    </div>

    <div class="fav-Area">
      <h3>追蹤的監測站</h3>
      <div class="card-menu card-columns">
        <Aqicard v-for="item in favCountyList" :key="item.SiteName"  :county="item"  :isActive="true" @favstar="tagCountyHandler"></Aqicard>
      </div>
    </div>

<hr>

    <div class="menu-Area">
      <div class="card-menu card-columns">
        <Aqicard v-for="item in aqiCardList" :key="item.SiteName" :county="item" :isActive="false" @favstar="tagCountyHandler"></Aqicard>
      </div>
    </div>
      
  </div>
</template>

<script>
import Selector from '@/components/Selector.vue'
import Aqicard from '@/components/Aqicard.vue'

export default {
    data(){
        return{
            aqidata:[],
            county:[],
            tagCounty:[],
            filter:'',
        }
    },
    components:{
      Selector,
      Aqicard
    },
    methods:{
        getdata(){
          /*const api = 'https://opendata.epa.gov.tw/api/v1/AQI?%24skip=0&%24top=1000&%24format=json';*/
          const api = 'http://opendata2.epa.gov.tw/AQI.json';
          this.$http.get(api).then((response) => {
            this.aqidata = response.data;
            response.data.forEach(item => {
                if(this.county.indexOf(item.County) === -1){
                  this.county.push(item.County);
                }
            });
          })
        },
        toFilter(data){
          this.filter = data;
        },
        tagCountyHandler(data){
          let index = this.tagCounty.findIndex( item => item === data.SiteName);
          if(this.tagCounty.indexOf(data.SiteName) === -1){
            this.tagCounty.push(data.SiteName);
            this.$store.commit('ADD_LIST',data.SiteName);
          }
          else{
            this.tagCounty.splice(index,1);
            this.$store.commit('DEL_LIST',index);
          }
        },
        InsertTagCounty(){
          let temp;
           temp = this.$store.getters['favlist'];
           temp.forEach(item => this.tagCounty.push(item))
        }
    },
    computed:{
      aqiCardList(){
        if(this.filter === ""){
          return this.aqidata.filter((item) => {
            return this.tagCounty.indexOf(item.SiteName) === -1
            }
          )
        }
        else{
          return this.aqidata.filter((item) =>{
              if(item.County === this.filter){
                return this.tagCounty.indexOf(item.SiteName) === -1
              }
          })
        }
      },
      favCountyList(){
        return this.aqidata.filter((item) =>{
          return this.tagCounty.indexOf(item.SiteName) > -1;
        })
      },
    },
    mounted(){
        this.$store.dispatch('INIT_LIST')
        this.getdata();
        this.InsertTagCounty();
    },
}
</script>

<style lang="scss" scoped>
.sel-Area{
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
}

.fav-Area{
  background-color: white;
  max-width:1100px;
  margin: 20px auto;;
  border-radius: 5px;
  box-shadow: 10px 5px 5px  rgb(160, 159, 159);
  h3{
    padding: 20px 10px 0px;
  }
}

.menu-Area{
  background-color: white;
  max-width: 1100px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 10px 5px 5px  rgb(160, 159, 159);
}

.card-menu{
  max-width: 900px;
  margin: 0px auto;
  padding: 10px 20px;
}

hr{
  height: 1px;
  background-color: rgb(145, 145, 145);
  width: 90%;
}
</style>>