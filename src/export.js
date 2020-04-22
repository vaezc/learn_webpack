const lastName = "zhou";
const firstName = "chang";
//具名导出
//应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。
export {firstName, lastName};


// 注意，不能使用 var、let 或 const 用于导出默认值 export default。
export  function testExport(){
    console.log("test export");
}