<template>
  <div class="content-container">
      <p class="content-text">Seleccione archivos</p>
      <div class="container-input">
      <input type="file" id="file" class="inputfile Folder-button" @change="previewImage" accept="image/*"/>
      <label for="file">
      <figure>
        <img class="iborrainputfile" src="../assets/Folder.svg">
      </figure>
      </label>
      </div>
        <br>
        <button @click="onUpload" class="content-button btn btn-light btn-circle">
          <img src="../assets/Send.svg">Enviar cliente
        </button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Content',
  data(){	  
	return{
      imageData: null,  
      picture: null,
      uploadValue: 0
	}
  },
  methods:{
    previewImage(event) {
      this.imageData = event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }      
      );
      if (this.onUpload)
      setTimeout(() => {
      alert('la imagen seleccionada fue: ' + this.imageData.name)
      }, 3000);
    }
  }, 
}
'use strict';
(function ( document )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});
}( document, window, 0 ));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-container {
  background-color: rgba(245, 245, 245, 0.692);
  text-align: center;
}

.content-text {
  color: #abaaaa;
  font-size: 28px;
  font-family: 'Roboto', sans-serif;
  padding-top: 10px;
}

.content-button {
  background-color: #22bf7d;
  border-radius: 25px;
  color: #fff;
  font-size: 12px;
}

.content-button:hover {
  background-color: #22bf7d;
  color: #fff;
}

.Folder-button + label figure {
  background-color: white;
  border-radius: 50%;
  box-shadow: 4px 4px 6px #9e9a9a;
  margin-bottom: 0;
  padding: 15px;
}

.Folder-button + label svg {
  box-shadow: 4px 4px 6px #9e9a9a;
  fill: #22bf7d;
  height: 100%;
  width: 100%;
}

.inputfile {
  overflow: hidden;
  height: 0px;
  width: 0px;
}

.inputfile + label {
  overflow: inherit;
}

@media (min-width: 578px){
  .content-text{
    font-size: 18px;
  }
}
</style>