<template>
  <div class="container">



      <div class="row justify-content-center">
        <div class="col-md-8">
          <h4 style="text-align:center" class="mb-4">AQI 空氣品質監測查詢網</h4>
          <div class="mb-4">
            <div class="input-group">
              <select class="form-control form-control-sm" v-model="target">
                <option value="">--- 請選擇城市 ---</option>
                <option :value="item" v-for="(item,index) in countyMenu" :key="index">{{item}}</option>
              </select>
            </div>
          </div>
        </div>
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
.container {
  max-width: 960px;
}

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
.border-top-gray { border-top-color: #adb5bd; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.lh-condensed { line-height: 1.25; }

</style>