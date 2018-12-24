import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productServ:ProductService) { }

  ngOnInit() {
  }

  allproducts=[]
  selectedObj ={}
  selectedObjforedit ={}
  selectedObjafteredit ={}

  id="";
  name="";
  price=0;
  quantity=0;
  
  isActive=true;
  isActiveEditBtn=true;

  doit=true;
  
  nameerror=null
  iderror=null
    addproduct(){
      //alert("1");
      let obj={id:this.id,name:this.name,price:this.price,quantity:this.quantity};  
      if(obj.id != null && obj.name != null && obj.price != 0 &&  obj.quantity != 0){
        this.productServ.addNewProduct(obj).subscribe(res =>this.selectedObj = res )
      console.log("add")
      }else{
        console.log("can not add")

      }
    }

    editproductbtn(){
      //let obj=this.selectedObjforedit
      if(this.selectedObjforedit!=null){
        this.productServ.editProductData(this.selectedObjforedit).subscribe(res =>this.selectedObjafteredit = res ) 
        console.log("edit")   
      }else{
        console.log("can not edit")   

      }
    }

    editproduct(id){
      this.isActiveEditBtn=false;
      this.productServ.getProductById(id).subscribe(res =>{
        this.selectedObjforedit = res
        //this.editproductbtn(this.selectedObjforedit);

      } )

    }

    printproductData(){
     this.isActive=false;
     this.productServ.getproduct().subscribe(res =>this.allproducts = res )
    }
  
    showItem(id){
      //alert(id);
      this.productServ.getProductById(id).subscribe(res =>this.selectedObj = res )
    }

    deleteproduct(id){
     // alert(id);
      this.productServ.deleteProductByID(id)//.subscribe(res =>this.selectedObj = res )
    }



  
}
