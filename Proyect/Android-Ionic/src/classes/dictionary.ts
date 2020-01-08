export class Dictionary{

    // ATRITBUTOS
    public english:Map<string,string>;
    public spanish:Map<string,string>;

    
    public mapa:Map<string,string>; // Creacion del atributo mapa
    mapa.set("HomeHeaderTitle","Home"); // Inserccion en el mapa
    mapa.get("HomeHeaderTitle"); // Recuperacion en el mapa





    // CONSTRUCTORES
    constructor(){
        // HOME PAGE
        this.english.set("HomeHeaderTitle","Home");
        this.english.set("HomeBodyTitle","Android-Ionic Application");
        this.english.set("HomeBodySubTitle","Created by Tomas Gomez Castilla");
        this.english.set("HomeBodyContent","This is an Android-Ionic application. Your can navigate across platform with the menu. More information about the funcionality or the author in the link below");
        this.english.set("HomeBodyLink","https://github.com/TomasGomCas");
        this.spanish.set("HomeHeaderTitle","Home");
        this.spanish.set("HomeBodyTitle","Aplicacion Android-Ionic");
        this.spanish.set("HomeBodySubTitle","Creado por Tomas Gomez Castilla");
        this.spanish.set("HomeBodyContent","Esto es una aplicacion de Android-Ionic. Puedes navegar a traves de la plataforma mediante el menu deslizante. Mas informacion sobre la funcionalidad o el autor en el link de abajo");
        this.spanish.set("HomeBodyLink","https://github.com/TomasGomCas");
    }

}