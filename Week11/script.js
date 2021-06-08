var cart = [];
var myVue1 = new Vue({
  el: "#instruments-app",
  data: {
    instruments:[
      {
        name:"Drums",
        image:"https://upload.wikimedia.org/wikipedia/commons/7/76/Platin_Drums_PTCL2016_AF.jpg",
				type:"Percussion",
				price:600,
				brand:"Yamaha"
      },
      {
        name:"Flute",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Piccolo_flute2.jpg/320px-Piccolo_flute2.jpg",
				type:"Woodwind",
				price:250,
				brand:"Fender"
      },
			{
        name:"Piano",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png/249px-Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png",
				type:"Percussion",
				price:6000,
				brand:"Yamaha"
      },
			{
        name:"Guitar",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Selmer-maccaferri-django-reinhardt-jazz-guitar.jpg/123px-Selmer-maccaferri-django-reinhardt-jazz-guitar.jpg",
				type:"String",
				price:600,
				brand:"Fender"
      },
			{
        name:"Violin",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Violin_VL100.png/177px-Violin_VL100.png",
				type:"String",
				price:200,
				brand:"Maton"
      },
			{
        name:"Trumpet",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Trumpet_1.jpg/320px-Trumpet_1.jpg",
				type:"Horn",
				price:250,
				brand:"Maton"
      }
    ]
  },
  methods: {
    showDetails : function (thing) {
			var scr = document.getElementById("screen");
			var det = document.getElementById("details");
      var img = document.getElementById("det_image");
			var nam = document.getElementById("det_name");
			var typ = document.getElementById("det_type");
			var pri = document.getElementById("det_price");
			var bra = document.getElementById("det_brand");
			scr.style.display = "block";
			det.style.display = "block";
			img.src = thing.image;
			nam.innerHTML = thing.name;
			typ.innerHTML = thing.type;
			pri.innerHTML = "$" + thing.price;
			bra.innerHTML = thing.brand;
    },
		hideScreen : function () {
			var scr = document.getElementById("screen");
			var det = document.getElementById("details");
			var frm = document.getElementById("form");
			scr.style.display = "none";
			det.style.display = "none";
			frm.style.display = "none";
	  },
		showForm : function () {
			var scr = document.getElementById("screen");
			var frm = document.getElementById("form");
			scr.style.display = "block";
			frm.style.display = "block";
		},
		moveToCart : function (thing) {
			cart.push(thing);
			this.instruments.splice(this.instruments.indexOf(thing), 1);
			document.getElementById("cart").innerHTML = cart.length;
			if (this.instruments.length == 0){
				document.getElementById("empty").style.display = "block";
			}
		},
		moveFromCart : function () {
			for (var i in cart) {
				this.instruments.push(cart[i]);
			}
			cart = [];
			document.getElementById("cart").innerHTML = cart.length;
			document.getElementById("empty").style.display = "none";
		},
		addToStore : function () {
			var brands = ["Yahama","Fender","Maton"];
			var inp_name = document.getElementById("frm_name");
			var inp_type = document.getElementById("frm_type");
			var inp_price = document.getElementById("frm_price");
			var inp_image = document.getElementById("frm_image");
			var inp_brand = document.getElementById("frm_brand");
			var val_name = inp_name.value;
			var val_image = inp_image.value;
			var val_type = inp_type.value;
			var val_price = inp_price.value;
			var val_brand = inp_brand.selectedIndex;
			var new_instrument = {
        name:val_name,
        image:val_image==undefined?"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg":val_image,
				type:val_type,
				price:parseFloat(val_price),
				brand:brands[val_brand]
      }
			this.instruments.push(new_instrument);
			this.hideScreen();
		}
  }
})