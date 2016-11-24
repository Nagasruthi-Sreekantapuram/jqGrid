var $jscomp={scope:{},findInternal:function(a,u,r){a instanceof String&&(a=String(a));for(var x=a.length,y=0;y<x;y++){var C=a[y];if(u.call(r,C,y,a))return{i:y,v:C}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,u,r){if(r.get||r.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[u]=r.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,u,r,x){if(u){r=$jscomp.global;a=a.split(".");for(x=0;x<a.length-1;x++){var y=a[x];y in r||(r[y]={});r=r[y]}a=a[a.length-1];x=r[a];u=u(x);u!=x&&null!=u&&$jscomp.defineProperty(r,a,{configurable:!0,writable:!0,value:u})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,r){return $jscomp.findInternal(this,a,r).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var u=a.jgrid,r=u.jqID,x=a.fn.jqGrid,y=x.getGuiStyles,C=x.getGridRes;u.extend({getColProp:function(a){var b=this[0];return null!=b&&b.grid&&(a=b.p.iColByName[a],void 0!==a)?b.p.colModel[a]:{}},setColProp:function(e,b){return this.each(function(){var f=this.p,d;this.grid&&null!=f&&b&&(d=f.iColByName[e],void 0!==
d&&a.extend(!0,f.colModel[d],b))})},sortGrid:function(a,b,f){return this.each(function(){var d=this.grid,c=this.p,e=c.colModel,n=e.length,h,l,p=!1;if(d)for(a||(a=c.sortname),"boolean"!==typeof b&&(b=!1),l=0;l<n;l++)if(h=e[l],h.index===a||h.name===a){!0===c.frozenColumns&&!0===h.frozen&&(p=d.fhDiv.find("#"+c.id+"_"+a));p&&0!==p.length||(p=d.headers[l].el);d=h.sortable;("boolean"!==typeof d||d)&&this.sortData("jqgh_"+c.id+"_"+a,l,b,f,p);break}})},clearBeforeUnload:function(){return this.each(function(){var e=
this.p,b=this.grid,f,d=u.clearArray,c=Object.prototype.hasOwnProperty;a.isFunction(b.emptyRows)&&b.emptyRows.call(this,!0,!0);a(document).off("mousemove.jqGrid mouseup.jqGrid"+e.id);a(this).off();var g,n=b.headers.length;for(g=0;g<n;g++)b.headers[g].el=null;for(f in b)b.hasOwnProperty(f)&&(b.propOrMethod=null);b="formatCol sortData updatepager refreshIndex setHeadCheckBox constructTr clearToolbar fixScrollOffsetAndhBoxPadding rebuildRowIndexes modalAlert toggleToolbar triggerToolbar formatter addXmlData addJSONData ftoolbar _inlinenav nav grid p".split(" ");
n=b.length;for(g=0;g<n;g++)c.call(this,b[g])&&(this[b[g]]=null);this._index={};d(e.data);d(e.lastSelectedData);d(e.selarrrow);d(e.savedRow)})},GridDestroy:function(){return this.each(function(){var e=this.p;if(this.grid&&null!=e){e.pager&&a(e.pager).remove();try{a("#alertmod_"+r(e.id)).remove(),a(this).jqGrid("clearBeforeUnload"),a(e.gBox).remove()}catch(b){}}})},GridUnload:function(){return this.each(function(){var e=a(this),b=this.p,f=a.fn.jqGrid;this.grid&&(e.removeClass(f.getGuiStyles.call(e,
"grid","ui-jqgrid-btable")),b.pager&&a(b.pager).empty().removeClass(f.getGuiStyles.call(e,"pagerBottom","ui-jqgrid-pager")).removeAttr("style").removeAttr("dir"),e.jqGrid("clearBeforeUnload"),e.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),e.empty(),e.insertBefore(b.gBox).show(),a(b.pager).insertBefore(b.gBox).show(),a(b.gBox).remove())})},setGridState:function(e){return this.each(function(){var b=this.p,f=this.grid,d=f.cDiv,c=a(f.uDiv),
g=a(f.ubDiv);if(f&&null!=b){var f=x.getIconRes.call(this,"gridMinimize.visible"),n=x.getIconRes.call(this,"gridMinimize.hidden");"hidden"===e?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",b.gView).slideUp("fast"),b.pager&&a(b.pager).slideUp("fast"),b.toppager&&a(b.toppager).slideUp("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&g.slideUp("fast"),c.slideUp("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",d).removeClass(f).addClass(n),b.gridstate="hidden"):
"visible"===e&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",b.gView).slideDown("fast"),b.pager&&a(b.pager).slideDown("fast"),b.toppager&&a(b.toppager).slideDown("fast"),!0===b.toolbar[0]&&("both"===b.toolbar[1]&&g.slideDown("fast"),c.slideDown("fast")),b.footerrow&&a(".ui-jqgrid-sdiv",b.gBox).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",d).removeClass(n).addClass(f),b.gridstate="visible")}})},filterToolbar:function(e){return this.each(function(){var b=this,f=b.grid,d=a(b),c=b.p,g=u.info_dialog,n=
u.htmlEncode;if(!this.ftoolbar){var h=a.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",idMode:"new",searchOperators:!1,resetIcon:"&times;",applyLabelClasses:!0,loadFilterDefaults:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},u.search,c.searching||{},e||{}),l=c.colModel,
p=function(a){return C.call(d,a)},U=p("errors.errcap"),x=p("edit.bClose"),V=p("edit.msg"),I=y.call(b,"states.hover"),z=y.call(b,"states.select"),F=y.call(b,"filterToolbar.dataField"),G={},D=function(a){var b="gs_";switch(h.idMode){case "compatibility":b+=c.idPrefix;break;case "new":b+=c.id+"_"}return b+a},A=function(b){var k;k=c.postData.filters;var d={},t,f,e,m;if(b)for(b=0;b<l.length;b++)e=l[b],!1!==e.search&&(m=e.searchoptions||{},d[e.name]={op:m.sopt?m.sopt[0]:"select"===e.stype?"eq":h.defaultSearch,
data:void 0!==m.defaultValue?m.defaultValue:""});if(!k||!c.search)return d;if("string"===typeof k)try{k=a.parseJSON(k)}catch(W){k={}}else k=k||{};t=k.rules||{};if(null==k||null!=k.groupOp&&null!=h.groupOp&&k.groupOp.toUpperCase()!==h.groupOp.toUpperCase()||null==t||0===t.length||null!=k.groups&&0<k.groups.length)return d;for(b=0;b<t.length;b++)for(f=t[b],k=0;k<l.length;k++)if(e=l[k],(e.index||e.name)===f.field&&!1!==e.search){m=e.searchoptions||{};if(m.sopt){if(0>a.inArray(f.op,m.sopt))continue}else if("select"===
e.stype){if("eq"!==f.op)continue}else if(f.op!==h.defaultSearch)continue;d[e.name]={op:f.op,data:f.data}}return d},H=function(a,b){switch(b){case 1:a.data("state",1).prop({checked:!0,indeterminate:!1});break;case 0:a.data("state",0).prop({checked:!1,indeterminate:!1});break;default:a.data("state",-1).prop({checked:!1,indeterminate:!0})}},B=function(){var e={},k=0,w={};a.each(l,function(){var d=this,t=d.index||d.name,q,m;q=d.searchoptions||{};var g=a("#"+r(D(d.name)),!0===d.frozen&&!0===c.frozenColumns?
f.fhDiv:f.hDiv),K=function(a,b){var c=d.formatoptions||{};return void 0!==c[a]?c[a]:p("formatter."+(b||d.formatter)+"."+a)},J=function(a){var b=K("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return a.replace(new RegExp(b,"g"),"")};m=h.searchOperators?g.parent().prev().children("a").data("soper")||h.defaultSearch:q.sopt?q.sopt[0]:"select"===d.stype||"checkbox"===d.stype?"eq":h.defaultSearch;if("custom"===d.stype&&a.isFunction(q.custom_value)&&0<g.length&&"SPAN"===g[0].nodeName.toUpperCase())q=
q.custom_value.call(b,g.children(".customelement").first(),"get");else if("select"===d.stype)q=g.val();else if("checkbox"===d.stype)switch(g.data("state")){case -1:q="";break;case 0:q="false";break;default:q="true"}else switch(q=a.trim(g.val()),d.formatter){case "integer":q=J(q).replace(K("decimalSeparator","number"),".");""!==q&&(q=String(parseInt(q,10)));break;case "number":q=J(q).replace(K("decimalSeparator"),".");""!==q&&"0"===String(q).charAt(0)&&(q=String(parseFloat(q)));break;case "currency":var g=
K("prefix"),v=K("suffix");g&&g.length&&(q=q.substr(g.length));v&&v.length&&(q=q.substr(0,q.length-v.length));q=J(q).replace(K("decimalSeparator"),".");""!==q&&(q=String(parseFloat(q)))}if(q||"nu"===m||"nn"===m)e[t]=q,w[t]=m,k++;else if(e.hasOwnProperty(t)&&delete e[t],!h.stringResult&&!h.searchOperators&&"local"!==c.datatype)try{null!=c.postData&&c.postData.hasOwnProperty(t)&&delete c.postData[t]}catch(Q){}});var K=0<k?!0:!1;if(h.stringResult||h.searchOperators||"local"===c.datatype){var g='{"groupOp":"'+
h.groupOp+'","rules":[',v=0;a.each(e,function(a,b){0<v&&(g+=",");g+='{"field":"'+a+'",';g+='"op":"'+w[a]+'",';g+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';v++});g+="]}";a.extend(c.postData,{filters:g});a.each(["searchField","searchString","searchOper"],function(a,b){c.postData.hasOwnProperty(b)&&delete c.postData[b]})}else a.extend(c.postData,e);var m;c.searchurl&&(m=c.url,d.jqGrid("setGridParam",{url:c.searchurl}));var n="stop"===d.triggerHandler("jqGridToolbarBeforeSearch")?
!0:!1;!n&&a.isFunction(h.beforeSearch)&&(n=h.beforeSearch.call(b));n||d.jqGrid("setGridParam",{search:K}).trigger("reloadGrid",[a.extend({page:1},h.reloadGridSearchOptions||{})]);m&&d.jqGrid("setGridParam",{url:m});d.triggerHandler("jqGridToolbarAfterSearch");a.isFunction(h.afterSearch)&&h.afterSearch.call(b)},M=p("search.odata")||[],E=c.customSortOperations,w=function(e,k,f){a("#sopt_menu").remove();k=parseInt(k,10);f=parseInt(f,10)+18;var g,t=0,w=[],m=a(e).data("soper"),t=a(e).data("colname"),v=
a(".ui-jqgrid-view").css("font-size")||"11px";k="<ul id='sopt_menu' class='"+y.call(b,"searchToolbar.menu","ui-search-menu")+"' role='menu' tabindex='0' style='z-index:9999;display:block;font-size:"+v+";left:"+k+"px;top:"+f+"px;'>";t=c.iColByName[t];if(void 0!==t){t=l[t];f=a.extend({},t.searchoptions);var J,p;f.sopt||(f.sopt=[],f.sopt[0]="select"===t.stype||"checkbox"===t.stype?"eq":h.defaultSearch);a.each(M,function(){w.push(this.oper)});null!=E&&a.each(E,function(a){w.push(a)});for(t=0;t<f.sopt.length;t++)v=
f.sopt[t],g=a.inArray(v,w),-1!==g&&(g=M[g],void 0!==g?(p=h.operands[v],J=g.text):null!=E&&(J=E[v],p=J.operand,J=J.text),g=m===v?z:"",k+='<li class="ui-menu-item '+g+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+n(v)+'" data-oper="'+n(p)+'"><table><tr><td style="width:25px">'+n(p)+"</td><td>"+n(J)+"</td></tr></table></a></li>");k+="</ul>";a("body").append(k);a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all");a("#sopt_menu > li > a").hover(function(){a(this).addClass(I)},
function(){a(this).removeClass(I)}).click(function(){var b=a(this).attr("value"),c=a(this).data("oper");d.triggerHandler("jqGridToolbarSelectOper",[b,c,e]);a("#sopt_menu").hide();a(e).data("soper",b).text(c);!0===h.autosearch&&(c=a(e).parent().next().children()[0],(a(c).val()||"nu"===b||"nn"===b)&&B())})}},v,S=[],T=a("<tr></tr>",{"class":"ui-search-toolbar",role:"row form"});h.loadFilterDefaults&&(G=A()||{});a.each(l,function(d){var k,e,f,t,w,m=this.searchoptions||{},n=this.editoptions||{},l=a("<th></th>",
{"class":y.call(b,"colHeaders","ui-th-column ui-th-"+c.direction+" "+(h.applyLabelClasses?this.labelClasses||"":"")),role:"gridcell","aria-describedby":c.id+"_"+this.name}),r=a("<div></div>");e=a("<table class='ui-search-table'><tbody><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></tbody></table>");var q=e.children("tbody").children("tr").children("td"),z=q.eq(0),A=q.eq(1),q=q.eq(2);!0===this.hidden&&l.css("display","none");
this.search=!1===this.search?!1:!0;void 0===this.stype&&(this.stype="text");k=a.extend({mode:"filter"},m);if(this.search){if(h.searchOperators){t=c.search&&null!=G[this.name]?G[this.name].op:k.sopt?k.sopt[0]:"select"===this.stype||"checkbox"===this.stype?"eq":h.defaultSearch;for(w=0;w<M.length;w++)if(M[w].oper===t){f=h.operands[t]||"";break}if(void 0===f&&null!=E)for(var N in E)if(E.hasOwnProperty(N)&&N===t){f=E[N].operand;break}void 0===f&&(f="=");z.append("<a title='"+(null!=k.searchtitle?k.searchtitle:
p("search.operandTitle"))+"' data-soper='"+t+"' class='"+y.call(b,"searchToolbar.operButton","soptclass")+"' data-colname='"+this.name+"'>"+f+"</a>")}z.data("colindex",d);null!=k.sopt&&1!==k.sopt.length||z.hide();c.search&&null!=G[this.name]&&(k.defaultValue=G[this.name].data);void 0===k.clearSearch&&(k.clearSearch="text"===this.stype?!0:!1);k.clearSearch?(f=a.isFunction(h.resetTitle)?h.resetTitle.call(b,{options:h,cm:this,cmName:this.name,iCol:d}):(p("search.resetTitle")||"Clear Search Value")+" "+
u.stripHtml(c.colNames[d]),q.append("<a title='"+f+"' aria-label='"+f+"' class='"+y.call(b,"searchToolbar.clearButton","clearsearchclass")+"'><span>"+h.resetIcon+"</span></a>")):q.hide();r.append(e);switch(this.stype){case "checkbox":d=void 0!==k.defaultValue?k.defaultValue:"-1";m=a("<input role='search' type='checkbox' class='"+F+"' name='"+(this.index||this.name)+"' id='"+D(this.name)+"' aria-labelledby='jqgh_"+c.id+"_"+this.name+"' data-state='"+d+"'/>");"-1"===d?m.prop("indeterminate",!0):"1"===
d&&m.prop("checked",!0);m.click(function(){var b=a(this);switch(b.data("state")){case -1:H(b,1);break;case 0:H(b,-1);break;default:H(b,0)}!0===h.autosearch&&B()});A.append(m);k.attr&&m.attr(k.attr);S.push({elem:m[0],options:k});break;case "select":if(e=this.surl||k.dataUrl)a.ajax(a.extend({url:e,context:{$tdInput:A,options:k,cm:this,iCol:d},dataType:"html",success:function(c,d,e){d=this.cm;var f=this.iCol,g=this.options,t=this.$tdInput;void 0!==g.buildSelect?(c=g.buildSelect.call(b,c,e,d,f))&&t.append(c):
t.append(c);c=t.children("select");c.attr({name:d.index||d.name,id:D(d.name)});g.attr&&c.attr(g.attr);c.addClass(F);c.css({width:"100%"});0===c.find("option[value='']").length&&"string"===typeof k.noFilterText&&(L=document.createElement("option"),L.value="",L.innerHTML=k.noFilterText,c.prepend(L),null!=a(c[0].options[c[0].selectedIndex]).attr("selected")||c[0].multiple||(c[0].selectedIndex=0));void 0!==g.defaultValue&&c.val(g.defaultValue);u.bindEv.call(b,c[0],g);u.fullBoolFeedback.call(b,g.selectFilled,
"jqGridSelectFilled",{elem:c[0],options:g,cm:d,cmName:d.name,iCol:f,mode:"filter"});!0===h.autosearch&&c.change(function(){B();return!1})}},u.ajaxOptions,c.ajaxSelectOptions||{}));else{var P,C,Q;this.searchoptions?(P=void 0===m.value?n.value||"":m.value,C=void 0===m.separator?n.separator||":":m.separator,Q=void 0===m.delimiter?n.delimiter||";":m.delimiter):this.editoptions&&(P=void 0===n.value?"":n.value,C=void 0===n.separator?":":n.separator,Q=void 0===n.delimiter?";":n.delimiter);if(P){e=document.createElement("select");
e.style.width="100%";m=a(e).attr({name:this.index||this.name,role:"search",id:D(this.name),"aria-describedby":c.id+"_"+this.name});k.attr&&m.attr(k.attr);if(!u.fillSelectOptions(e,P,C,Q,null!=k.attr&&k.attr.multiple)&&"string"===typeof k.noFilterText){var L=document.createElement("option");L.value="";L.innerHTML=k.noFilterText;L.selected=!0;m.prepend(L)}void 0!==k.defaultValue&&m.val(k.defaultValue);m.addClass(F);S.push({elem:e,options:k});A.append(e);u.fullBoolFeedback.call(b,k.selectFilled,"jqGridSelectFilled",
{elem:e,options:this.searchoptions||n,cm:this,cmName:this.name,iCol:d,mode:"filter"});!0===h.autosearch&&m.change(function(){B();return!1})}}break;case "text":m=a("<input role='search' type='text' class='"+F+"' name='"+(this.index||this.name)+"' id='"+D(this.name)+"' aria-labelledby='jqgh_"+c.id+"_"+this.name+"' value='"+(void 0!==k.defaultValue?k.defaultValue:"")+"'/>");A.append(m);k.attr&&m.attr(k.attr);S.push({elem:m[0],options:k});!0===h.autosearch&&(h.searchOnEnter?m.keypress(function(a){return 13===
(a.charCode||a.keyCode||0)?(B(),!1):this}):m.keydown(function(a){switch(a.which){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:v&&clearTimeout(v),v=setTimeout(function(){B()},h.autosearchDelay)}}));break;case "custom":A.append("<span style='width:100%;padding:0;box-sizing:border-box;' class='"+F+"' name='"+(this.index||this.name)+"' id='"+D(this.name)+"'/>");try{if(a.isFunction(k.custom_element)){var R=k.custom_element.call(b,void 0!==k.defaultValue?k.defaultValue:
"",k);if(R)R=a(R).addClass("customelement"),r.find("span[name='"+(this.index||this.name)+"']").append(R);else throw"e2";}else throw"e1";}catch(O){"e1"===O&&g.call(b,U,"function 'custom_element' "+V.nodefined,x),"e2"===O?g.call(b,U,"function 'custom_element' "+V.novalue,x):g.call(b,U,"string"===typeof O?O:O.message,x)}}}l.append(r);l.find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function(){a(this).addClass(I)},function(){a(this).removeClass(I)});T.append(l);h.searchOperators||
z.hide()});a(f.hDiv).find(">div>.ui-jqgrid-htable>thead").append(T);a.each(S,function(){u.bindEv.call(b,this.elem,this.options)});h.searchOperators&&(a(".soptclass",T).click(function(b){var c=a(this).offset();w(this,c.left,c.top);b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()}));a(".clearsearchclass",T).click(function(){var b=a(this).closest(".ui-search-clear"),c=parseInt(b.siblings(".ui-search-oper").data("colindex"),10),b=b.siblings(".ui-search-input"),
d=a.extend({},l[c].searchoptions||{}).defaultValue||"";switch(l[c].stype){case "select":d?b.find("select").val(d):b.find("select")[0].selectedIndex=0;break;case "checkbox":H(b.find("input[type=checkbox]"),-1);break;default:b.find("input").val(d)}!0===h.autosearch&&B()});b.ftoolbar=!0;b.triggerToolbar=B;b.clearToolbar=function(e){var k={},g=0,w;e="boolean"!==typeof e?!0:e;a.each(l,function(){var d,e=a("#"+r(D(this.name)),!0===this.frozen&&!0===c.frozenColumns?f.fhDiv:f.hDiv),h,v=this.searchoptions||
{};void 0!==v.defaultValue&&(d=v.defaultValue);w=this.index||this.name;switch(this.stype){case "checkbox":H(e,-1);break;case "select":h=0<e.length?!e[0].multiple:!0;e.find("option").each(function(b){this.selected=0===b&&h;if(a(this).val()===d)return this.selected=!0,!1});if(void 0!==d)k[w]=d,g++;else try{delete c.postData[w]}catch(N){}break;case "text":e.val(d||"");if(void 0!==d)k[w]=d,g++;else try{delete c.postData[w]}catch(N){}break;case "custom":a.isFunction(v.custom_value)&&0<e.length&&"SPAN"===
e[0].nodeName.toUpperCase()&&v.custom_value.call(b,e.children(".customelement").first(),"set",d||"")}});var t=0<g?!0:!1;c.resetsearch=!0;if(h.stringResult||h.searchOperators||"local"===c.datatype){var v='{"groupOp":"'+h.groupOp+'","rules":[',m=0;a.each(k,function(a,b){0<m&&(v+=",");v+='{"field":"'+a+'",';v+='"op":"eq",';v+='"data":"'+(b+"").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}';m++});v+="]}";a.extend(c.postData,{filters:v});a.each(["searchField","searchString","searchOper"],function(a,b){c.postData.hasOwnProperty(b)&&
delete c.postData[b]})}else a.extend(c.postData,k);var n;c.searchurl&&(n=c.url,d.jqGrid("setGridParam",{url:c.searchurl}));var p="stop"===d.triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!p&&a.isFunction(h.beforeClear)&&(p=h.beforeClear.call(b));p||e&&d.jqGrid("setGridParam",{search:t}).trigger("reloadGrid",[a.extend({page:1},h.reloadGridResetOptions||{})]);n&&d.jqGrid("setGridParam",{url:n});d.triggerHandler("jqGridToolbarAfterClear");a.isFunction(h.afterClear)&&h.afterClear()};b.toggleToolbar=
function(){var b=a("tr.ui-search-toolbar",f.hDiv),e=!0===c.frozenColumns?a("tr.ui-search-toolbar",f.fhDiv):!1;"none"===b.css("display")?(b.show(),e&&e.show()):(b.hide(),e&&e.hide());!0===c.frozenColumns&&(d.jqGrid("destroyFrozenColumns"),d.jqGrid("setFrozenColumns"))};!0===c.frozenColumns&&(d.jqGrid("destroyFrozenColumns"),d.jqGrid("setFrozenColumns"));d.on("jqGridRefreshFilterValues.filterToolbar"+(h.loadFilterDefaults?" jqGridAfterLoadComplete.filterToolbar":""),function(){var b,d,e=A(!0)||{},f;
if(h.stringResult||h.searchOperators||"local"===c.datatype||!c.search){for(b in e)if(e.hasOwnProperty(b)&&(d=e[b],f=a("#"+r(D(b))),0<f.length)){if("SELECT"===f[0].tagName.toUpperCase()&&f[0].multiple)f.val(d.data.split(","));else if(f.is("input[type=checkbox]")){var g=f.closest("th.ui-th-column");if(0<g.length){var w=(c.colModel[g[0].cellIndex]||{}).searchoptions||{},v="off",g="on";null!=w.value&&(w=w.value.split(":"),g=w[0],v=w[1]);H(f,d.data===g?1:d.data===v?0:-1)}}else a.trim(f.val())!==d.data&&
f.val(d.data);f=f.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass");f.data("soper",d.op);f.text(h.operands[d.op])}for(d=0;d<c.colModel.length;d++)b=c.colModel[d].name,e.hasOwnProperty(b)||a("#"+r(D(b))).val("")}})}})},destroyFilterToolbar:function(){return this.each(function(){this.ftoolbar&&(this.toggleToolbar=this.clearToolbar=this.triggerToolbar=null,this.ftoolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),!0===this.p.frozenColumns&&a(this).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},
destroyGroupHeader:function(e){void 0===e&&(e=!0);return this.each(function(){var b,f,d,c;b=this.grid;var g=this.p.colModel,n=a("table.ui-jqgrid-htable thead",b.hDiv);if(b){a(this).off(".setGroupHeaders");var h=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),l=b.headers;b=0;for(f=l.length;b<f;b++){d=g[b].hidden?"none":"";d=a(l[b].el).width(l[b].width).css("display",d);try{d.removeAttr("rowSpan")}catch(p){d.attr("rowSpan",1)}h.append(d);c=d.children("span.ui-jqgrid-resize");0<c.length&&(c[0].style.height=
"");d.children("div")[0].style.top=""}a(n).children("tr.ui-jqgrid-labels").remove();a(n).prepend(h);!0===e&&a(this).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(e){e=a.extend({useColSpanStyle:!1,applyLabelClasses:!0,groupHeaders:[]},e||{});return this.each(function(){this.p.groupHeader=e;var b,f,d=0,c,g,n,h,l,p,r=this.p,x=r.colModel,C=x.length,I=this.grid.headers,z=a("table.ui-jqgrid-htable",this.grid.hDiv),F=u.isCellClassHidden,G=z.children("thead").children("tr.ui-jqgrid-labels"),
D=G.last().addClass("jqg-second-row-header");c=z.children("thead");var A=z.find(".jqg-first-row-header");void 0===A[0]?A=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):A.empty();var H=function(a,b){var c;for(c=0;c<b.length;c++)if(b[c].startColumnName===a)return b[c];return 0};a(this).prepend(c);c=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header");for(b=0;b<C;b++)if(n=I[b].el,h=a(n),f=x[b],g={height:"0",width:I[b].width+"px",
display:f.hidden?"none":""},a("<th>",{role:"gridcell"}).css(g).addClass("ui-first-th-"+r.direction+(e.applyLabelClasses?" "+(f.labelClasses||""):"")).appendTo(A),n.style.width="",g=y.call(this,"colHeaders","ui-th-column-header ui-th-"+r.direction+" "+(e.applyLabelClasses?f.labelClasses||"":"")),l=H(f.name,e.groupHeaders)){d=l.numberOfColumns;p=l.titleText;for(l=f=0;l<d&&b+l<C;l++)x[b+l].hidden||F(x[b+l].classes)||f++;g=a("<th>").addClass(g).css({height:"22px","border-top":"0 none"}).html(p);0<f&&
g.attr("colspan",String(f));r.headertitles&&g.attr("title",g.text());0===f&&g.hide();h.before(g);c.append(n);--d}else 0===d?e.useColSpanStyle?h.attr("rowspan",G.length+1):(a("<th>").addClass(g).css({display:f.hidden?"none":"","border-top":"0 none"}).insertBefore(h),c.append(n)):(c.append(n),d--);r=a(this).children("thead");r.prepend(A);c.insertAfter(D);z.prepend(r);e.useColSpanStyle&&(z.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height:"+
b.height()+"px !important;cursor:col-resize;")}),z.find(".ui-th-column>div").each(function(){var b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&!b.hasClass("ui-jqgrid-rotate")&&!b.hasClass("ui-jqgrid-rotateOldIE")&&b.css("top",(c.height()-b.outerHeight(!0))/2+"px")}));a(this).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var a=this;if(0===a.length)return 0;var a=a[0],a=a.p.colModel,b=a.length,f=-1,d;for(d=0;d<b&&!0===a[d].frozen;d++)f=
d;return f+1},setFrozenColumns:function(e){e=e||{};return this.each(function(){var b=this,f=a(b),d=b.p,c=b.grid;if(c&&null!=d&&!0!==d.frozenColumns){var g=d.colModel,n,h=g.length,l=-1,p=!1,u=[],x=r(d.id),C=y.call(b,"states.hover"),I=y.call(b,"states.disabled");if(!0!==d.subGrid&&!0!==d.treeGrid&&!d.scroll){for(n=0;n<h&&!0===g[n].frozen;n++)p=!0,l=n,u.push("#jqgh_"+x+"_"+r(g[n].name));d.sortable&&(g=a(c.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),g.sortable("destroy"),f.jqGrid("setGridParam",
{sortable:{options:{items:0<u.length?">th:not(:has("+u.join(",")+"),:hidden)":">th:not(:hidden)"}}}),f.jqGrid("sortableColumns",g));if(0<=l&&p){p=d.caption?a(c.cDiv).outerHeight():0;u=a(".ui-jqgrid-htable",d.gView).height();d.toppager&&(p+=a(c.topDiv).outerHeight());!0===d.toolbar[0]&&"bottom"!==d.toolbar[1]&&(p+=a(c.uDiv).outerHeight());c.fhDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===d.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+p+
"px;height:"+u+"px;' class='"+y.call(b,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>");c.fbDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(p,10)+parseInt(u,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>");a(d.gView).append(c.fhDiv);g=a(".ui-jqgrid-htable",d.gView).clone(!0);h=g[0].tHead.rows;if(d.groupHeader){a(h[0].cells).filter(":gt("+l+")").remove();a(h).filter(".jqg-third-row-header").each(function(){a(this).children("th[id]").each(function(){var c=
a(this).attr("id");c&&c.substr(0,b.id.length+1)===b.id+"_"&&(c=c.substr(b.id.length+1),d.iColByName[c]>l&&a(this).remove())})});var z=-1,F=-1,G,D;a(h).filter(".jqg-second-row-header").children("th").each(function(){G=parseInt(a(this).attr("colspan")||1,10);D=parseInt(a(this).attr("rowspan")||1,10);1<D?(z++,F++):G&&(z+=G,F++);if(z===l)return!1});z!==l&&(F=l);a(h).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){a(this).children(":gt("+F+")").remove()})}else a(h).each(function(){a(this).children(":gt("+
l+")").remove()});a(g).width(1);a(c.fhDiv).append(g).scroll(function(){this.scrollLeft=0});d.footerrow&&(g=a(".ui-jqgrid-bdiv",d.gView).height(),c.fsDiv=a("<div style='position:absolute;"+("rtl"===d.direction?"right:0;":"left:0;")+"top:"+(parseInt(p,10)+parseInt(u,10)+parseInt(g,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),a(d.gView).append(c.fsDiv),p=a(".ui-jqgrid-ftable",d.gView).clone(!0),a("tr",p).each(function(){a("td:gt("+l+")",this).remove()}),a(p).width(1),a(c.fsDiv).append(p));
f.on("jqGridSortCol.setFrozenColumns",function(b,e,f){b=a("tr.ui-jqgrid-labels:last th:eq("+d.lastsort+")",c.fhDiv);e=a("tr.ui-jqgrid-labels:last th:eq("+f+")",c.fhDiv);a("span.ui-grid-ico-sort",b).addClass(I);a(b).attr("aria-selected","false");a("span.ui-icon-"+d.sortorder,e).removeClass(I);a(e).attr("aria-selected","true");d.viewsortcols[0]||d.lastsort===f||(a("span.s-ico",b).hide(),a("span.s-ico",e).show())});a(d.gView).append(c.fbDiv);a(c.bDiv).scroll(function(){a(c.fbDiv).scrollTop(a(this).scrollTop())});
a(c.fbDiv).on("mousewheel.setFrozenColumns DOMMouseScroll.setFrozenColumns",function(d){c.bDiv.scrollTop+=a.isFunction(e.mouseWheel)?e.mouseWheel.call(b,d):"mousewheel"===d.type?-d.originalEvent.wheelDelta/10:6*d.originalEvent.detail});!0===d.hoverrows&&a(d.idSel).off("mouseover.jqGrid mouseout.jqGrid");var A=function(a,b){var c=a.height();1<=Math.abs(c-b)&&0<b&&(a.height(b),c=a.height(),1<=Math.abs(b-c)&&a.height(b+Math.round(b-c)))},H=function(a,b){var c=a.width();1<=Math.abs(c-b)&&(a.width(b),
c=a.width(),1<=Math.abs(b-c)&&a.width(b+Math.round(b-c)))},B=function(b,c,e,f){var g,k,h,l,v,w,m;m=a(c).position().top;var p,r,u;if(null!=b&&0<b.length){b[0].scrollTop=c.scrollTop;b.css("rtl"===d.direction?{top:m,right:0}:{top:m,left:0});k=b.children("table").children("thead").children("tr");h=a(c).children("div").children("table").children("thead").children("tr");0===h.length&&(k=a(b.children("table")[0].rows),h=a(a(c).children("div").children("table")[0].rows));g=Math.min(k.length,h.length);p=0<
g?a(k[0]).position().top:0;r=0<g?a(h[0]).position().top:0;if(0<=e)for(0<=f&&(g=Math.min(f+1,g));e<g;e++)if(l=a(h[e]),"none"!==l.css("display")&&l.is(":visible")){m=l.position().top;f=a(k[e]);v=f.position().top;w=l.height();if(null!=d.groupHeader&&d.groupHeader.useColSpanStyle)for(u=l[0].cells,n=0;n<u.length;n++)l=u[n],null!=l&&"TH"===l.nodeName.toUpperCase()&&(w=Math.max(w,a(l).height()));m=w+(m-r)+(p-v);A(f,m)}A(b,c.clientHeight)}},p={resizeDiv:!0,resizedRows:{iRowStart:0,iRowEnd:-1}},M={header:p,
resizeFooter:!0,body:p};f.on("jqGridAfterGridComplete.setFrozenColumns",function(){a(d.idSel+"_frozen").remove();a(c.fbDiv).height(c.hDiv.clientHeight);var b=a(this).clone(!0),e=b[0].rows,g=f[0].rows;a(e).filter("tr[role=row]").each(function(){a(this.cells).filter("td[role=gridcell]:gt("+l+")").remove()});c.fbRows=e;b.width(1).attr("id",d.id+"_frozen");b.appendTo(c.fbDiv);if(!0===d.hoverrows){var h=function(b,c,d){a(b)[c](C);a(d[b.rowIndex])[c](C)};a(e).filter(".jqgrow").hover(function(){h(this,"addClass",
g)},function(){h(this,"removeClass",g)});a(g).filter(".jqgrow").hover(function(){h(this,"addClass",e)},function(){h(this,"removeClass",e)})}B(c.fhDiv,c.hDiv,0,-1);B(c.fbDiv,c.bDiv,0,-1);c.sDiv&&B(c.fsDiv,c.sDiv,0,-1)});var E=function(b){a(c.fbDiv).scrollTop(a(c.bDiv).scrollTop());b.header.resizeDiv&&B(c.fhDiv,c.hDiv,b.header.resizedRows.iRowStart,b.header.resizedRows.iRowEnd);b.body.resizeDiv&&B(c.fbDiv,c.bDiv,b.body.resizedRows.iRowStart,b.body.resizedRows.iRowEnd);b.resizeFooter&&c.sDiv&&b.resizeFooter&&
B(c.fsDiv,c.sDiv,0,-1);var d=c.fhDiv[0].clientWidth;b.header.resizeDiv&&null!=c.fhDiv&&1<=c.fhDiv.length&&A(a(c.fhDiv),c.hDiv.clientHeight);b.body.resizeDiv&&null!=c.fbDiv&&0<c.fbDiv.length&&H(a(c.fbDiv),d);b.resizeFooter&&null!=c.fsDiv&&0<=c.fsDiv.length&&H(a(c.fsDiv),d)};a(d.gBox).on("resizestop.setFrozenColumns",function(){setTimeout(function(){E(M)},50)});f.on("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",
function(a,b){var c=f.jqGrid("getInd",b);E({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:c,iRowEnd:c}}})});f.on("jqGridResizeStop.setFrozenColumns",function(){E(M)});f.on("jqGridResetFrozenHeights.setFrozenColumns",function(a,b){E(b||M)});c.hDiv.loading||f.triggerHandler("jqGridAfterGridComplete");d.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var e=a(this),b=this.grid,f=this.p,d=r(f.id);
if(b&&!0===f.frozenColumns){a(b.fhDiv).remove();a(b.fbDiv).off(".setFrozenColumns");a(b.fbDiv).remove();b.fhDiv=null;b.fbDiv=null;b.fbRows=null;f.footerrow&&(a(b.fsDiv).remove(),b.fsDiv=null);e.off(".setFrozenColumns");if(!0===f.hoverrows){var c,g=y.call(this,"states.hover");e.on("mouseover.jqGrid",function(b){c=a(b.target).closest("tr.jqgrow");"ui-subgrid"!==a(c).attr("class")&&a(c).addClass(g)}).on("mouseout.jqGrid",function(b){c=a(b.target).closest("tr.jqgrow");a(c).removeClass(g)})}f.frozenColumns=
!1;f.sortable&&(b=a(b.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),b.sortable("destroy"),e.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)"}}}),e.jqGrid("sortableColumns",b))}})}})});
//# sourceMappingURL=grid.custom.map
