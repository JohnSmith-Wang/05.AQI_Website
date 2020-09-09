<template>

    <div class="col-12">
      <div class="col-12 AQI-title">
        <h4>AQI</h4>
        <h4>空氣品質監測查詢網</h4>
      </div>
      <div class="col-12 County-selector">
        <select class="form-control form-control-md" v-model="target">
          <option value="">--- 請選擇城市 ---</option>
          <option :value="item" v-for="(item,index) in countyMenu" :key="index">{{item}}</option>
        </select>
      </div>
    </div>
      
</template>

<script>
export default {
    data(){
        return{
            target:''
        }
    },
    props:{
      countyMenu:{
        type:Array,
        required:true
      }
    },
    watch:{
        target: function(val){
            this.$emit('selTarget',val)
        }
    }
}
</script>

<style lang="scss" scoped>
.AQI-title{
  margin: 20px auto;
  h4{
    text-align: center;
  }
}

.County-selector{
  margin: 20px auto;
}

</style>