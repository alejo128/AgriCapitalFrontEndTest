<template>
    <div class="content-container">
        <p class="content-text">Seleccione archivos</p>
        <button type="file" class="Folder-button btn btn-sucess btn-circle rounded-circle">
            <img class="button-img" src="../assets/Folder.svg">
        </button>
        <br>
        <button type="file" class="content-button btn btn-light btn-circle">
            <img src="../assets/Send.svg">
            Enviar cliente
        </button>
    </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content-container {
        text-align: center;
        background-color: rgba(245, 245, 245, 0.692);
    }
    .content-text {
        padding-top: 10px;
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
        color: #abaaaa;
    }
    .Folder-button {
        margin-bottom: 16px;
        background-color: white;
        height: 80px;
        width: 80px;
        position: relative;
        box-shadow: 4px 4px 6px #9e9a9a;
    }
    .button-img {
        width: 50px;
        height: 50px;
    }
    .content-button {
        margin-top: 10px;
        border-radius: 25px;
        background-color: #22bf7d;
        color: #fff;
        font-size: 12px;
    }
    .content-button:hover { 
        color: #fff;
        background-color: #22bf7d;
    }
    @media (min-width: 578px){
        .content-text{
            font-size: 18px;
        }
        .Folder-button{
            height: 65px;
            width: 65px;
        }
        .button-img {
            width: 40px;
            height: 40px;
        }
    }
</style>