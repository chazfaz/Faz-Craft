export class Inventory{
 constructor(){
  this.items={};
  this.selected=null;
  this.bar=document.getElementById('hotbar');
 }
 add(item){
  this.items[item]=(this.items[item]||0)+1;
  this.render();
 }
 render(){
  this.bar.innerHTML='';
  for(const k in this.items){
   const d=document.createElement('div');
   d.className='slot';
   d.textContent=k+':'+this.items[k];
   d.onclick=()=>this.selected=k;
   this.bar.appendChild(d);
  }
 }
}