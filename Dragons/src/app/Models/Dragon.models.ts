export class Dragon{
  id: number;
  title: string;
  description: string;
  img: string;
  constructor(cId:number = 0, cTitle: string = '', cDescription:string='',cImg:string=''){
    this.id=cId;
    this.title =cTitle;
    this.description=cDescription;
    this.img=cImg;
  }
}
