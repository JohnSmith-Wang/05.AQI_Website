<template>
  <div>
    <div>
        <Selector :countyMenu="county" @selTarget="toFilter"></Selector>
    </div>

    <div class="container justify-content-center">
      <div class="card-columns">
        <Aqicard v-for="item in favCountyList" :key="item.SiteName"  :county="item"  :isActive="true" @favstar="tagCountyHandler"></Aqicard>
      </div>
    </div>

<hr>

    <div class="container justify-content-center">
      <div class="card-columns">
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
          const vm = this;
          const api = 'http://opendata2.epa.gov.tw/AQI.json';
          vm.$http.get(api).then((response) => {
            vm.aqidata = response.data;
            response.data.forEach(item => {
                if(vm.county.indexOf(item.County) === -1){
                  vm.county.push(item.County);
                }
            });
          })
        },
        toFilter(getdata){
          this.filter = getdata
        },
        tagCountyHandler(getdata){
          let vm = this;
          let index = vm.tagCounty.findIndex( item => item === getdata.SiteName);
          if(vm.tagCounty.indexOf(getdata.SiteName) === -1){
            vm.tagCounty.push(getdata.SiteName);
            vm.$store.commit('ADD_LIST',getdata.SiteName);
          }
          else{
            vm.tagCounty.splice(index,1);
            vm.$store.commit('DEL_LIST',index);
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
        let vm = this;
        if(this.filter === ""){
          return vm.aqidata.filter(function(item){
            return vm.tagCounty.indexOf(item.SiteName) === -1
          })
        }
        else{
          return vm.aqidata.filter(function(item){
            if(item.County === vm.filter){
              return vm.tagCounty.indexOf(item.SiteName) === -1
            }
          })
        }
      },
      favCountyList(){
        let vm = this;

        return vm.aqidata.filter(function(item){
          return vm.tagCounty.indexOf(item.SiteName) > -1
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