// export class Marcador {

// constructor( public lat: number, public lng: number){}

// }

//Los dos codigos hacen lo mismo y funcionan igual

export class Marcador {

public lat: number;
public lng: number;

public titulo: string = 'Sin titulo';
public desc = 'Sin Descripcion';

constructor( lat: number, lng: number){
    this.lat = lat;
    this.lng = lng;
}
}