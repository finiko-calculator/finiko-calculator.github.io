import{m as e,C as t,R as a,S as n,T as r,d as o,a as l,b as c}from"./vendor.13791f52.js";const i=e((()=>({main:{padding:"20px"},input:{"& input":{background:"white"}},textBlock:{width:"200px"}}))),s=e=>{const o=i(),{formula:l,formulaReversed:c}=e,[s,m]=t.exports.useState(null),[u,d]=t.exports.useState(0),[p,b]=t.exports.useState(null),[x,f]=t.exports.useState(0);return t.exports.useEffect((()=>{d(l(Number(s)))}),[s]),t.exports.useEffect((()=>{f(c(Number(p)))}),[p]),console.log(s,u),a.createElement(n,{className:o.main,container:!0,item:!0,spacing:2,direction:"column"},a.createElement(n,{container:!0,item:!0,spacing:1,wrap:"nowrap"},a.createElement(n,{container:!0,item:!0},a.createElement(r,{value:s,variant:"outlined",type:"number",label:"Получу",onChange:e=>m(e.target.value),fullWidth:!0,className:o.input})),a.createElement(n,{item:!0,className:o.textBlock},a.createElement(r,{value:+u.toFixed(4),variant:"outlined",label:"Внесу",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0}}))),a.createElement(n,{container:!0,item:!0,spacing:1,wrap:"nowrap"},a.createElement(n,{item:!0,className:o.textBlock},a.createElement(r,{value:+x.toFixed(4),variant:"outlined",label:"Получу",fullWidth:!0,disabled:!0,InputLabelProps:{shrink:!0}})),a.createElement(n,{container:!0,item:!0},a.createElement(r,{value:p,variant:"outlined",type:"number",label:"Внесу",onChange:e=>b(e.target.value),fullWidth:!0,className:o.input}))))},m=e((()=>({container:{maxWidth:"900px",minWidth:"350px",margin:"auto",marginTop:"50px",flexDirection:"column",background:"#eff0fc",boxSizing:"border-box",borderRadius:"10px"},header:{height:"60px",backgroundColor:"#080A30",alignItems:"center",color:"white",fontWeight:"bold",padding:"10px",paddingLeft:"60px",boxSizing:"border-box",background:"url(/assets/logo.286d5bc9.svg) 15px 50% no-repeat",backgroundSize:"40px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"},footer:{height:"30px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",backgroundColor:"#080A30"},subHeader:{display:"flex",height:"35px",color:"#080A30",alignItems:"center",padding:"5px 15px",fontWeight:"bold",backgroundColor:"#cdcff5"},icon:{cursor:"pointer"},root:{padding:"10px"}})));function u(){const e=m(),[r,c]=t.exports.useState(!1),[i,u]=t.exports.useState(!1),[d,p]=t.exports.useState(!1);return a.createElement("div",{className:"App"},a.createElement(n,{className:e.root},a.createElement(n,{className:e.container,container:!0},a.createElement(n,{className:e.header,container:!0,item:!0},"Finiko Calculator"),a.createElement(n,{className:e.subHeader,container:!0,item:!0,justify:"space-between"},"Продукт 4 месяца",r?a.createElement(l,{onClick:()=>c(!r),className:e.icon}):a.createElement(o,{onClick:()=>c(!r),className:e.icon})),r&&a.createElement(s,{formula:e=>.51*e,formulaReversed:e=>e+.49*e/.51}),a.createElement(n,{className:e.subHeader,container:!0,item:!0,justify:"space-between"},"Продукт 5 месяцев",i?a.createElement(l,{onClick:()=>u(!i),className:e.icon}):a.createElement(o,{onClick:()=>u(!i),className:e.icon})),i&&a.createElement(s,{formula:e=>.41*e,formulaReversed:e=>e+.59*e/.41}),a.createElement(n,{className:e.subHeader,container:!0,item:!0,justify:"space-between"},"Продукт 7 месяцев",d?a.createElement(l,{onClick:()=>p(!d),className:e.icon}):a.createElement(o,{onClick:()=>p(!d),className:e.icon})),d&&a.createElement(s,{formula:e=>.31*e,formulaReversed:e=>e+.69*e/.31}),a.createElement(n,{className:e.footer}))))}c.render(a.createElement(a.StrictMode,null,a.createElement(u,null)),document.getElementById("root"));
