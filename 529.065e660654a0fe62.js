"use strict";(self.webpackChunkLogAppUs=self.webpackChunkLogAppUs||[]).push([[529],{5529:(h,c,n)=>{n.r(c),n.d(c,{ProtectedAppModule:()=>r});var d=n(6895),u=n(4154),o=n(8256),p=n(8115);class i{constructor(t,s){this.router=t,this.authService=s}get usuario(){return this.authService.user}logOut(){console.log("hola2"),this.router.navigateByUrl("/auth"),this.authService.logOut()}}i.\u0275fac=function(t){return new(t||i)(o.Y36(u.F0),o.Y36(p.e))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-dashboard"]],decls:7,vars:2,consts:[["id","do-login","routerLink","/auth/register",1,"btn-login",3,"click"]],template:function(t,s){1&t&&(o.TgZ(0,"div")(1,"h1"),o._uU(2),o.qZA(),o.TgZ(3,"p"),o._uU(4),o.qZA(),o.TgZ(5,"button",0),o.NdJ("click",function(){return s.logOut()}),o._uU(6," Salir "),o.qZA()()),2&t&&(o.xp6(2),o.hij("Bienvenido ",s.usuario.usname,""),o.xp6(2),o.hij(" ID: ",s.usuario.id,""))},dependencies:[u.rH],styles:["div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#136a8a;background:linear-gradient(to right,#267871,#136a8a);height:20rem;width:20rem;border-radius:5%;padding:5%}.btn-login[_ngcontent-%COMP%]{background:none;text-decoration:none;color:#fff;box-shadow:0 0 0 2px #fff;border-radius:3px;padding:5px 2em;transition:.5s}.btn-login[_ngcontent-%COMP%]:hover{background:white;color:#696969;transition:.5s}"]});const l=[{path:"",children:[{path:"",component:i},{path:"**",redirectTo:""}]}];class e{}e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.Bz.forChild(l),u.Bz]});class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[d.ez,e]})}}]);