<template>
	<div>
	  <div class="weui-cell" v-for="item in seller" @click="doFilterTutor(item)">
	  	<div class="weui-cell__bd">
	  		<p>{{item.ksmc}}</p>
	  	</div>
	  </div>
  </div>
</template>

<script>
	import model from './model.js'
  export default {
  	data() {
    	this.model = model(this.axios)
      return {
      	
      }
    },
    props:['seller','souInput'],
    watch:{
    	'seller':function(newVal){
    		
    	},
    	'souInput':function(newVal){
    		this.$emit('tohomeShow');
    		console.log('3333');
    		let self = this;
		    $('#searchInput').bind('input propertychange', function() {
		        self.sousuo(newVal)
		    });
    	}
    },
    created(){
    	
    },
  	mounted(){
			
  	},
  	methods:{
  		doFilterTutor(ele){
				let self = this;
	      if (ele.czlx == "1") {
	      	if (process.env.NODE_ENV == 'dev') {
					  window.location='../../outpatientAdvance.html#/appointDocToday?ksdm=' + ele.ksdm
					} else if (process.env.NODE_ENV == 'production') {
					  window.location='../../2ysechos/outpatientAdvance.html#/appointDocToday?ksdm=' + ele.ksdm
					}
	      } else {
	      	if (process.env.NODE_ENV == 'dev') {
					  window.location='../../outpatientAdvance.html#/appointSourceToday?ksdm=' + ele.ksdm
					} else if (process.env.NODE_ENV == 'production') {
					  window.location='../../2ysechos/outpatientAdvance.html#/appointSourceToday?ksdm=' + ele.ksdm
					}
	      }
			}, 
			sousuo(InputVal){
				console.log(InputVal);
				var text = InputVal
        $('.weui-cell').each(function () {
            var $self = $(this);
            var flag = $self.text().search(text);
            if (flag > -1) {
                $self.css("display", "");
            } else {
                $self.css("display", "none");
            }
        });			
			},
  	}
  }
  
  </script>


