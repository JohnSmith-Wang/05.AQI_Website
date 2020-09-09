<template>

    <div class="card custom-card" :class="testColor">
      <div class="card-header">
        {{county.County}}-{{county.SiteName}}
        <a href="#" class="float-right" @click.prevent="starHandler">
          <i class="fa-star" :class="{fas:starActive,far:!starActive}"></i>
        </a>
      </div>
      <div class="card-body">
        <ul class="list-unstyled">
          <li><strong>AQI 指數:</strong> {{county.AQI}}</li>
          <li><strong>PM2.5:</strong> {{county['PM2.5']}}</li>
          <li><strong>說明:</strong> {{county.Status}}</li>
        </ul>
        {{county.PublishTime}}
      </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
          starActive:this.isActive,
          cardColor:''
        }
    },
    props:{
        county:{
          type:Object,
          required:true
        },
        isActive:{
          type:Boolean
        }
    },
    methods:{
      starHandler(){
        this.$emit('favstar',this.county)
        this.starActive = !this.starActive;
      },
      cardColorHandler(data){
        switch(data){
          case '普通':
            return 'bg-aqua';

          case '對敏感族群不健康':
            return 'bg-pink';

          case '對所有族群不健康':
            return 'bg-yellow';
        
          case '非常不健康':
            return 'bg-warning';

          case '危害':
            return 'bg-red';
        
          default :
            return 'bg-light';
        }
      }
    },
    computed:{
      testColor(){
        const data = this.county.Status;
        switch(data){
          case '普通':
            return 'bg-aqua';

          case '對敏感族群不健康':
            return 'bg-pink';

          case '對所有族群不健康':
            return 'bg-yellow';
        
          case '非常不健康':
            return 'bg-warning';

          case '危害':
            return 'bg-red';
        
          default :
            return 'bg-light';
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.custom-card{
  max-width: 18rem;
  margin: 10px auto;
  box-shadow: 7px 5px 5px  rgb(160, 159, 159);
}

li {
  color: rgb(28, 91, 185);
}

strong {
  color: rgb(0, 0, 0);
}

.bg-aqua {
  background-color: aquamarine;
}

.bg-pink {
  background-color: pink;
}

.bg-yellow {
 background-color: rgb(255, 255, 0);
}

.bg-red {
  background-color:rgb(233, 111, 111)
}
</style>