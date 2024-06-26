// Define el array de objetos con la información de los patrocinadores
const patrocinadores = [
    {
      nombre: "Cine Atlantis",
      logo: "/images/patrocinadores/cine.jpg",
      link: "https://cineatlantis.com.mx/"
    },
    {
      nombre: "La Doblebgang Barber",
      logo: "https://i.ibb.co/9gZ6RK4/Whats-App-Image-2024-04-27-at-2-27-06-PM.jpg",
      link: "https://www.facebook.com/profile.php?id=61556275406037"
    },
    {
      nombre: "Postres Alexa",
      logo: "https://i.ibb.co/h1q7mgw/fab092c7-7209-44f4-b889-c523f2187c6f.jpg",
      link: "https://www.facebook.com/profile.php?id=100032832318618&mibextid=ZbWKwL"
    },
    {
      nombre: "Valagoz",
      logo: "https://i.ibb.co/MSMX7xS/Whats-App-Image-2024-04-30-at-6-05-53-PM.jpg",
      link: "https://www.facebook.com/profile.php?id=61554981143395"
    },
    {
      nombre: "Opticas Veo",
      logo: "/images/patrocinadores/opticas.jpg",
      link: "https://www.facebook.com/profile.php?id=100084676903740"
    },
    {
      nombre: "Refaccionaria Gómez",
      logo: "/images/patrocinadores/refaccionaria.jfif",
      link: "/"
    },
    {
      nombre: "Luigi's Pizza",
      logo: "https://scontent.fcjs3-1.fna.fbcdn.net/v/t1.6435-9/134746715_1376941596003683_2331001513736271992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHelRnkE1IoluGpazucjqufzct07l4TFgjNy3TuXhMWCM63BM12i0UnwQwI6qPOIZAjMDHtX7xh9Qy0Hao4c5jN&_nc_ohc=J4nCCn1cNNMAb4yAcFP&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfCsLdDvCph7q223O-GAZ8y__mBirrOH1q47i8ul3Oh3MA&oe=6657A367",
      link: "https://www.facebook.com/profile.php?id=100010635676763"
    },
    {
      nombre: "VICKY Ferrer",
      logo: "/images/patrocinadores/vicky.jfif",
      link: "https://www.facebook.com/profile.php?id=100057289126117"
    },
    {
      nombre: "Print Ad",
      logo: "/images/patrocinadores/printad.jpg",
      link: "https://www.facebook.com/profile.php?id=100063530985276"
    },
    {
      nombre: "Flor de trigo",
      logo: "https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/369256207_122103509000017379_3642588777365183130_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHVjOlWGiEeQieJYcqEUggGiy-4Fx8MaEmLL7gXHwxoSbDE5gNH3RPaQTmpxf3X7mFiSC1O3sm65YPRHQ742TLu&_nc_ohc=rTcJ4ZD203MQ7kNvgERI31p&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfA_yfhmstt6aH2_FOsEuqpInWn7lxBTYRHbHig0g0gOgA&oe=663778FE",
      link: "https://www.facebook.com/profile.php?id=61550521386253"
    },
    {
      nombre: "Cithali Academia de Danza",
      logo: "https://i.ibb.co/TqQbVHS/Whats-App-Image-2024-05-02-at-2-46-14-PM.jpg",
      link: "https://www.facebook.com/AcademiaDeDanzaCithlali"
    },
    {
      nombre: "Estudio de artes MC",
      logo: "https://i.ibb.co/gPBcMLn/Whats-App-Image-2024-05-02-at-2-46-13-PM.jpg",
      link: "https://www.facebook.com/EstudiodeartesMC"
    },
    {
      nombre: "Unión Local de Cañeros del Ingenio La Joya",
      logo: "https://i.ibb.co/PjjyVSw/Logotipo-color.png",
      link: "https://www.facebook.com/pages/Uni%C3%B3n-Local-de-Ca%C3%B1eros-del-Ingenio-La-Joya-SPR-de-RL/374577313000464"
    },
    {
      nombre: "Gym Ruibal's Fitness",
      logo: "https://i.ibb.co/GphY0kV/Whats-App-Image-2024-05-02-at-7-23-23-AM.jpg",
      link: "https://www.facebook.com/profile.php?id=100054257960417"
    },
    {
      nombre: "Almacenes Vargas",
      logo: "https://i.ibb.co/vc2G99m/web-whatsapp-50.png",
      link: "https://www.facebook.com/AlmacenesVargas"
    },
    {
      nombre: "Taqueria Paloma",
      logo: "https://i.ibb.co/80dc3D6/3f55788637884d84a71f7091e576ac5f.png",
      link: "https://www.facebook.com/profile.php?id=61552708588212"
    },
    {
      nombre: "TEEKSI",
      logo: "https://i.ibb.co/frB1Cxp/Imagen-de-Whats-App-2024-04-29-a-las-18-30-11-854acec6.jpg",
      link: "https://www.facebook.com/profile.php?id=100010802268651"
    },
    {
      nombre: "Pizzeria Tony's",
      logo: "https://i.ibb.co/bB6m8jw/Imagen-de-Whats-App-2024-05-01-a-las-16-34-44-4109af8f.jpg",
      link: "https://www.facebook.com/profile.php?id=100015050404150"
    },
    {
      nombre: "La casita de juguete",
      logo: "https://i.ibb.co/mTBjMfb/Imagen-de-Whats-App-2024-05-02-a-las-21-04-31-0fc7e2c1.jpg",
      link: "https://www.facebook.com/profile.php?id=100089494504846"
    },
    {
      nombre: "Aguas Naturales El Amigo Levi",
      logo: "https://i.ibb.co/pb9vQVG/Whats-App-Image-2024-05-03-at-8-53-04-AM.jpg",
      link: "/"
    },
    {
      nombre: "Comisaria de Sihochac",
      logo: "https://i.ibb.co/02YVtc2/Whats-App-Image-2024-05-03-at-9-20-27-AM.jpg",
      link: "/"
    },
    {
      nombre: "Pasteleria Erikar",
      logo: "https://i.ibb.co/G3KXJ16/images.png",
      link: "https://i.ibb.co/h1yyg5C/cd06e028-e6fa-4a41-bf8d-11e186e378ba.jpg"
    },
    {
      nombre: "Micheladas Luka",
      logo: "https://i.ibb.co/gtpWf4c/409f805a-5029-42f9-951f-9ed76ca3a33c.jpg",
      link: "https://www.facebook.com/MicheladasLuka"
    },
    {
      nombre: "Taqueria Rey Lechon",
      logo: "https://i.ibb.co/YLcy466/rey-lechon.jpg",
      link: "https://www.facebook.com/profile.php?id=100069277370255"
    },
    {
      nombre: "Dulce Postre By Karol",
      logo: "https://i.ibb.co/hYbHvyq/650dc656-758a-4cdf-b78a-b109419b9654.jpg",
      link: "https://www.facebook.com/profile.php?id=100063623378288"
    },
    {
      nombre: "Brincoletas",
      logo: "https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/314341242_864454038260638_3179235829149796750_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZvgQcOMKfXoQ7kNvgHFl9Ar&_nc_ht=scontent.fcjs3-1.fna&oh=00_AfDOOkzASzDKzEXKz62v5PI7zyRJJikQRfbfWvGMS0BCJA&oe=66416380",
      link: "https://www.facebook.com/brincoletas.evento"
    },
    // Añade más objetos según sea necesario
  ];
  
  // Exporta el array de objetos para que esté disponible fuera de este archivo
  module.exports = patrocinadores;
  