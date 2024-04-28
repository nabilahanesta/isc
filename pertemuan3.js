//desctructuring array
const listMahasiswa = ["ozi", "arya", "nabila", "ratih", ",mira", "ahmad"];

const [a,b,c,d,e,f]= listMahasiswa;

//console.log(f);
//destructuring object
const dataDiri = {
    nama: "Nabila",
    umur: 17,
    tanggal_lahir: "30 september 2005",
    sapa: function (){
        console.log('Halo ${this.nama}');
    },
}

const{umur,tanggal_lahir,nama}= dataDiri;

console.log(nama);