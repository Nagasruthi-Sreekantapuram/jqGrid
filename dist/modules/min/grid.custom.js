!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],function(c){return b(c,a.document)}):"object"==typeof module&&module.exports?module.exports=function(a,c){return a||(a=window),void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(a)),require("./grid.base"),require("./jquery.fmatter"),require("./grid.common"),b(c,a.document),c}:b(jQuery,a.document)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=a.jgrid,d=c.jqID,e=a.fn.jqGrid,f=e.getGuiStyles,g=e.getGridRes;c.extend({getColProp:function(a){var b,c={},d=this[0];return null!=d&&d.grid&&(b=d.p.iColByName[a],void 0!==b)?d.p.colModel[b]:c},setColProp:function(b,c){return this.each(function(){var d,e=this,f=e.p;e.grid&&null!=f&&c&&(d=f.iColByName[b],void 0!==d&&a.extend(!0,f.colModel[d],c))})},sortGrid:function(a,b,c){return this.each(function(){var d,e,f,g=this,h=g.grid,i=g.p,j=i.colModel,k=j.length,l=!1;if(h)for(a||(a=i.sortname),"boolean"!=typeof b&&(b=!1),e=0;e<k;e++)if(d=j[e],d.index===a||d.name===a){i.frozenColumns===!0&&d.frozen===!0&&(l=h.fhDiv.find("#"+i.id+"_"+a)),l&&0!==l.length||(l=h.headers[e].el),f=d.sortable,("boolean"!=typeof f||f)&&g.sortData("jqgh_"+i.id+"_"+a,e,b,c,l);break}})},clearBeforeUnload:function(){return this.each(function(){var d,e=this,f=e.p,g=e.grid,h=c.clearArray,i=Object.prototype.hasOwnProperty;a.isFunction(g.emptyRows)&&g.emptyRows.call(e,!0,!0),a(b).off("mousemove.jqGrid mouseup.jqGrid"+f.id),a(e).off();var j,k=g.headers.length;for(j=0;j<k;j++)g.headers[j].el=null;for(d in g)g.hasOwnProperty(d)&&(g.propOrMethod=null);var l=["formatCol","sortData","updatepager","refreshIndex","setHeadCheckBox","constructTr","clearToolbar","fixScrollOffsetAndhBoxPadding","rebuildRowIndexes","modalAlert","toggleToolbar","triggerToolbar","formatter","addXmlData","addJSONData","ftoolbar","_inlinenav","nav","grid","p"];for(k=l.length,j=0;j<k;j++)i.call(e,l[j])&&(e[l[j]]=null);e._index={},h(f.data),h(f.lastSelectedData),h(f.selarrrow),h(f.savedRow)})},GridDestroy:function(){return this.each(function(){var b=this,c=b.p;if(b.grid&&null!=c){c.pager&&a(c.pager).remove();try{a("#alertmod_"+d(c.id)).remove(),a(b).jqGrid("clearBeforeUnload"),a(c.gBox).remove()}catch(a){}}})},GridUnload:function(){return this.each(function(){var b=this,c=a(b),d=b.p,e=a.fn.jqGrid;b.grid&&(c.removeClass(e.getGuiStyles.call(c,"grid","ui-jqgrid-btable")),d.pager&&a(d.pager).empty().removeClass(e.getGuiStyles.call(c,"pagerBottom","ui-jqgrid-pager")).removeAttr("style").removeAttr("dir"),c.jqGrid("clearBeforeUnload"),c.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),c.empty(),c.insertBefore(d.gBox).show(),a(d.pager).insertBefore(d.gBox).show(),a(d.gBox).remove())})},setGridState:function(b){return this.each(function(){var c=this,d=c.p,f=c.grid,g=f.cDiv,h=a(f.uDiv),i=a(f.ubDiv);if(f&&null!=d){var j=function(a){return e.getIconRes.call(c,"gridMinimize."+a)},k=j("visible"),l=j("hidden");"hidden"===b?(a(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",d.gView).slideUp("fast"),d.pager&&a(d.pager).slideUp("fast"),d.toppager&&a(d.toppager).slideUp("fast"),d.toolbar[0]===!0&&("both"===d.toolbar[1]&&i.slideUp("fast"),h.slideUp("fast")),d.footerrow&&a(".ui-jqgrid-sdiv",d.gBox).slideUp("fast"),a(".ui-jqgrid-titlebar-close span",g).removeClass(k).addClass(l),d.gridstate="hidden"):"visible"===b&&(a(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",d.gView).slideDown("fast"),d.pager&&a(d.pager).slideDown("fast"),d.toppager&&a(d.toppager).slideDown("fast"),d.toolbar[0]===!0&&("both"===d.toolbar[1]&&i.slideDown("fast"),h.slideDown("fast")),d.footerrow&&a(".ui-jqgrid-sdiv",d.gBox).slideDown("fast"),a(".ui-jqgrid-titlebar-close span",g).removeClass(l).addClass(k),d.gridstate="visible")}})},filterToolbar:function(e){return this.each(function(){var h=this,i=h.grid,j=a(h),k=h.p,l=c.info_dialog,m=c.htmlEncode;if(!this.ftoolbar){var n,o=a.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",idMode:"new",searchOperators:!1,resetIcon:"&times;",applyLabelClasses:!0,loadFilterDefaults:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^",in:"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},c.search,k.searching||{},e||{}),p=k.colModel,q=function(a){return g.call(j,a)},r=q("errors.errcap"),s=q("edit.bClose"),t=q("edit.msg"),u=f.call(h,"states.hover"),v=f.call(h,"states.select"),w=f.call(h,"filterToolbar.dataField"),x={},y=function(a){var b="gs_";switch(o.idMode){case"compatibility":b+=k.idPrefix;break;case"new":b+=k.id+"_"}return b+a},z=function(a){return"#"+d(y(a))},A=function(a){var b=(a.value||"").split(":");return{on:b[0]||"on",off:b[1]||"off"}},B=function(b){var c,d,e,f,g,h,i=k.postData.filters,j={},l=k.iColByName;if(b)for(d=0;d<p.length;d++)g=p[d],g.search!==!1&&(h=g.searchoptions||{},j[g.name]={op:h.sopt?h.sopt[0]:"select"===g.stype||"checkbox"===g.stype?"eq":o.defaultSearch,data:void 0!==h.defaultValue?h.defaultValue:""});if(!i||!k.search)return j;if("string"==typeof i)try{i=a.parseJSON(i)}catch(a){i={}}else i=i||{};if(e=i.rules||{},null==i||null!=i.groupOp&&null!=o.groupOp&&i.groupOp.toUpperCase()!==o.groupOp.toUpperCase()||null==e||0===e.length||null!=i.groups&&i.groups.length>0)return j;for(d=0;d<e.length;d++)for(f=e[d],g=p[l[f.field]],c=0;c<p.length;c++)if(g=p[c],(g.index||g.name)===f.field&&g.search!==!1){if(h=g.searchoptions||{},h.sopt){if(a.inArray(f.op,h.sopt)<0)continue}else if("select"===g.stype||"checkbox"===g.stype){if("eq"!==f.op)continue}else if(f.op!==o.defaultSearch)continue;j[g.name]={op:f.op,data:f.data}}return j},C=function(a,b){switch(b){case 1:a.data("state",1).prop({checked:!0,indeterminate:!1});break;case 0:a.data("state",0).prop({checked:!1,indeterminate:!1});break;default:a.data("state",-1).prop({checked:!1,indeterminate:!0})}},D=function(){var b={},c=0,d={};a.each(p,function(){var e,f,g=this,j=g.index||g.name,l=g.searchoptions||{},m=a(z(g.name),g.frozen===!0&&k.frozenColumns===!0?i.fhDiv:i.hDiv),n=function(a,b){var c=g.formatoptions||{};return void 0!==c[a]?c[a]:q("formatter."+(b||g.formatter)+"."+a)},p=function(a){var b=n("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return a.replace(new RegExp(b,"g"),"")};if(f=o.searchOperators?m.parent().prev().children("a").data("soper")||o.defaultSearch:l.sopt?l.sopt[0]:"select"===g.stype||"checkbox"===g.stype?"eq":o.defaultSearch,"custom"===g.stype&&a.isFunction(l.custom_value)&&m.length>0&&"SPAN"===m[0].nodeName.toUpperCase())e=l.custom_value.call(h,m.children(".customelement").first(),"get");else if("select"===g.stype)m.prop("multiple")?(e=m.val(),e=null==e||0===e.length?"":e.join(k.inFilterSeparator||",")):e=m.val();else if("checkbox"===g.stype){var r=A(l);switch(m.data("state")){case-1:e="";break;case 0:e=r.off;break;default:e=r.on}}else switch(e=a.trim(m.val()),g.formatter){case"integer":e=p(e).replace(n("decimalSeparator","number"),"."),""!==e&&(e=String(parseInt(e,10)));break;case"number":e=p(e).replace(n("decimalSeparator"),"."),""!==e&&"0"===String(e).charAt(0)&&(e=String(parseFloat(e)));break;case"currency":var s=n("prefix"),t=n("suffix");s&&s.length&&(e=e.substr(s.length)),t&&t.length&&(e=e.substr(0,e.length-t.length)),e=p(e).replace(n("decimalSeparator"),"."),""!==e&&(e=String(parseFloat(e)))}if(e||"nu"===f||"nn"===f||a.inArray(f,k.customUnaryOperations)>=0)b[j]=e,d[j]=f,c++;else if(b.hasOwnProperty(j)&&delete b[j],!o.stringResult&&!o.searchOperators&&"local"!==k.datatype)try{null!=k.postData&&k.postData.hasOwnProperty(j)&&delete k.postData[j]}catch(a){}});var e=c>0;if(o.stringResult||o.searchOperators||"local"===k.datatype){var f='{"groupOp":"'+o.groupOp+'","rules":[',g=0;a.each(b,function(a,b){g>0&&(f+=","),f+='{"field":"'+a+'",',f+='"op":"'+d[a]+'",',b+="",f+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',g++}),f+="]}",a.extend(k.postData,{filters:f}),a.each(["searchField","searchString","searchOper"],function(a,b){k.postData.hasOwnProperty(b)&&delete k.postData[b]})}else a.extend(k.postData,b);var l;k.searchurl&&(l=k.url,j.jqGrid("setGridParam",{url:k.searchurl}));var m="stop"===j.triggerHandler("jqGridToolbarBeforeSearch");!m&&a.isFunction(o.beforeSearch)&&(m=o.beforeSearch.call(h)),m||j.jqGrid("setGridParam",{search:e}).trigger("reloadGrid",[a.extend({page:1},o.reloadGridSearchOptions||{})]),l&&j.jqGrid("setGridParam",{url:l}),j.triggerHandler("jqGridToolbarAfterSearch"),a.isFunction(o.afterSearch)&&o.afterSearch.call(h)},E=function(b){var c,d={},e=0;b="boolean"!=typeof b||b,a.each(p,function(){var b,f,g=this,j=a(z(g.name),g.frozen===!0&&k.frozenColumns===!0?i.fhDiv:i.hDiv),l=g.searchoptions||{};switch(void 0!==l.defaultValue&&(b=l.defaultValue),c=g.index||g.name,g.stype){case"checkbox":C(j,-1);break;case"select":if(f=!(j.length>0)||!j[0].multiple,j.find("option").each(function(c){if(this.selected=0===c&&f,a(this).val()===b)return this.selected=!0,!1}),void 0!==b)d[c]=b,e++;else try{delete k.postData[c]}catch(a){}break;case"text":if(j.val(b||""),void 0!==b)d[c]=b,e++;else try{delete k.postData[c]}catch(a){}break;case"custom":a.isFunction(l.custom_value)&&j.length>0&&"SPAN"===j[0].nodeName.toUpperCase()&&l.custom_value.call(h,j.children(".customelement").first(),"set",b||"")}});var f=e>0;if(k.resetsearch=!0,o.stringResult||o.searchOperators||"local"===k.datatype){var g='{"groupOp":"'+o.groupOp+'","rules":[',l=0;a.each(d,function(a,b){l>0&&(g+=","),g+='{"field":"'+a+'",',g+='"op":"eq",',b+="",g+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',l++}),g+="]}",a.extend(k.postData,{filters:g}),a.each(["searchField","searchString","searchOper"],function(a,b){k.postData.hasOwnProperty(b)&&delete k.postData[b]})}else a.extend(k.postData,d);var m;k.searchurl&&(m=k.url,j.jqGrid("setGridParam",{url:k.searchurl}));var n="stop"===j.triggerHandler("jqGridToolbarBeforeClear");!n&&a.isFunction(o.beforeClear)&&(n=o.beforeClear.call(h)),n||b&&j.jqGrid("setGridParam",{search:f}).trigger("reloadGrid",[a.extend({page:1},o.reloadGridResetOptions||{})]),m&&j.jqGrid("setGridParam",{url:m}),j.triggerHandler("jqGridToolbarAfterClear"),a.isFunction(o.afterClear)&&o.afterClear.call(h)},F=function(){var b=a("tr.ui-search-toolbar",i.hDiv),c=k.frozenColumns===!0&&a("tr.ui-search-toolbar",i.fhDiv);"none"===b.css("display")?(b.show(),c&&c.show()):(b.hide(),c&&c.hide()),k.frozenColumns===!0&&(j.jqGrid("destroyFrozenColumns"),j.jqGrid("setFrozenColumns"))},G=q("search.odata")||[],H=k.customSortOperations,I=function(b,c,d){a("#sopt_menu").remove(),c=parseInt(c,10),d=parseInt(d,10)+18;var e,g,i=0,l=[],n=a(b).data("soper"),q=a(b).data("colname"),r=a(".ui-jqgrid-view").css("font-size")||"11px",s="<ul id='sopt_menu' class='"+f.call(h,"searchToolbar.menu","ui-search-menu")+"' role='menu' tabindex='0' style='z-index:9999;display:block;font-size:"+r+";left:"+c+"px;top:"+d+"px;'>";if(i=k.iColByName[q],void 0!==i){var t,w,x,y,z,A=p[i],B=a.extend({},A.searchoptions);for(B.sopt||(B.sopt=[],B.sopt[0]="select"===A.stype||"checkbox"===A.stype?"eq":o.defaultSearch),a.each(G,function(){l.push(this.oper)}),null!=H&&a.each(H,function(a){l.push(a)}),i=0;i<B.sopt.length;i++)x=B.sopt[i],g=a.inArray(x,l),g!==-1&&(t=G[g],void 0!==t?(y=o.operands[x],z=t.text):null!=H&&(w=H[x],y=w.operand,z=w.text),e=n===x?v:"",s+='<li class="ui-menu-item '+e+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+m(x)+'" data-oper="'+m(y)+'"><table><tr><td style="width:25px">'+m(y)+"</td><td>"+m(z)+"</td></tr></table></a></li>");s+="</ul>",a("body").append(s),a("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all"),a("#sopt_menu > li > a").hover(function(){a(this).addClass(u)},function(){a(this).removeClass(u)}).click(function(){var c=a(this).attr("value"),d=a(this).data("oper");if(j.triggerHandler("jqGridToolbarSelectOper",[c,d,b]),a("#sopt_menu").hide(),a(b).data("soper",c).text(d),o.autosearch===!0){var e=a(b).parent().next().children()[0];(a(e).val()||"nu"===c||"nn"===c||a.inArray(c,k.customUnaryOperations)>=0)&&D()}})}},J=[],K=a("<tr></tr>",{class:"ui-search-toolbar",role:"row form"});o.loadFilterDefaults&&(x=B()||{}),a.each(p,function(d){var e,g,i,j,m,p,v,z=this,A="filter",B=z.searchoptions||{},E=z.editoptions||{},F=a("<th></th>",{class:f.call(h,"colHeaders","ui-th-column ui-th-"+k.direction+" "+(o.applyLabelClasses?z.labelClasses||"":"")),role:"gridcell","aria-describedby":k.id+"_"+z.name}),I=a("<div></div>"),L=a("<table class='ui-search-table'><tbody><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></tbody></table>"),M=L.children("tbody").children("tr").children("td"),N=M.eq(0),O=M.eq(1),P=M.eq(2);if(this.hidden===!0&&F.css("display","none"),this.search=this.search!==!1,void 0===this.stype&&(this.stype="text"),e=a.extend({mode:A},B),this.search){if(o.searchOperators){for(j=k.search&&null!=x[this.name]?x[this.name].op:e.sopt?e.sopt[0]:"select"===z.stype||"checkbox"===z.stype?"eq":o.defaultSearch,m=0;m<G.length;m++)if(G[m].oper===j){i=o.operands[j]||"";break}if(void 0===i&&null!=H){var Q;for(Q in H)if(H.hasOwnProperty(Q)&&Q===j){i=H[Q].operand;break}}void 0===i&&(i="="),N.append("<a title='"+(null!=e.searchtitle?e.searchtitle:q("search.operandTitle"))+"' data-soper='"+j+"' class='"+f.call(h,"searchToolbar.operButton","soptclass")+"' data-colname='"+this.name+"'>"+i+"</a>")}if(N.data("colindex",d),null!=e.sopt&&1!==e.sopt.length||N.hide(),k.search&&null!=x[this.name]&&(e.defaultValue=x[this.name].data),void 0===e.clearSearch&&(e.clearSearch="text"===this.stype),e.clearSearch){var R=a.isFunction(o.resetTitle)?o.resetTitle.call(h,{options:o,cm:z,cmName:z.name,iCol:d}):(q("search.resetTitle")||"Clear Search Value")+" "+c.stripHtml(k.colNames[d]);P.append("<a title='"+R+"' aria-label='"+R+"' class='"+f.call(h,"searchToolbar.clearButton","clearsearchclass")+"'><span>"+o.resetIcon+"</span></a>")}else P.hide();switch(I.append(L),this.stype){case"checkbox":var S=void 0!==e.defaultValue?e.defaultValue:"-1";v=a("<input role='search' type='checkbox' class='"+w+"' name='"+(z.index||z.name)+"' id='"+y(z.name)+"' aria-labelledby='jqgh_"+k.id+"_"+z.name+"' data-state='"+S+"'/>"),"-1"===S?v.prop("indeterminate",!0):"1"===S&&v.prop("checked",!0),v.click(function(){var b=a(this);switch(b.data("state")){case-1:C(b,1);break;case 0:C(b,-1);break;default:C(b,0)}o.autosearch===!0&&D()}),O.append(v),e.attr&&v.attr(e.attr),J.push({elem:v[0],options:e});break;case"select":if(g=this.surl||e.dataUrl)a.ajax(a.extend({url:g,context:{$tdInput:O,options:e,cm:z,iCol:d},dataType:"html",success:function(d,f,g){var i,j,k,l=this.cm,m=this.iCol,n=this.options,p=this.$tdInput;void 0!==n.buildSelect?(i=n.buildSelect.call(h,d,g,l,m),i&&p.append(i)):p.append(d),k=p.children("select"),k.attr({name:l.index||l.name,id:y(l.name)}),n.attr&&k.attr(n.attr),k.addClass(w),k.css({width:"100%"}),0===k.find("option[value='']").length&&"string"==typeof e.noFilterText&&(j=b.createElement("option"),j.value="",j.innerHTML=e.noFilterText,k.prepend(j),null!=a(k[0].options[k[0].selectedIndex]).attr("selected")||k[0].multiple||(k[0].selectedIndex=0)),k[0].multiple&&0===k.find("option[selected]").length&&k[0].selectedIndex!==-1&&(k[0].options[k[0].selectedIndex].selected=!1),void 0!==n.defaultValue&&k.val(n.defaultValue),c.bindEv.call(h,k[0],n),c.fullBoolFeedback.call(h,n.selectFilled,"jqGridSelectFilled",{elem:k[0],options:n,cm:l,cmName:l.name,iCol:m,mode:A}),o.autosearch===!0&&k.change(function(){return D(),!1})}},c.ajaxOptions,k.ajaxSelectOptions||{}));else{var T,U,V;z.searchoptions?(T=void 0===B.value?E.value||"":B.value,U=void 0===B.separator?E.separator||":":B.separator,V=void 0===B.delimiter?E.delimiter||";":B.delimiter):z.editoptions&&(T=void 0===E.value?"":E.value,U=void 0===E.separator?":":E.separator,V=void 0===E.delimiter?";":E.delimiter);var W=k.indexByColumnData[z.name];if(B.generateValue&&null!=W){var X,Y;T="";for(X in W)if(W.hasOwnProperty(X)){for(Y in W[X])if(W[X].hasOwnProperty(Y)){X=W[X][Y];break}""!==T&&(T+=V||";"),T+=X+U+X}}if(T){p=b.createElement("select"),p.style.width="100%",v=a(p).attr({name:z.index||z.name,role:"search",id:y(z.name),"aria-describedby":k.id+"_"+z.name}),e.attr&&v.attr(e.attr);var Z=c.fillSelectOptions(p,T,U,V,null!=e.attr&&e.attr.multiple);if(!Z&&"string"==typeof e.noFilterText){var $=b.createElement("option");$.value="",$.innerHTML=e.noFilterText,$.selected=!0,v.prepend($)}void 0!==e.defaultValue&&v.val(e.defaultValue),v.addClass(w),J.push({elem:p,options:e}),O.append(p),c.fullBoolFeedback.call(h,e.selectFilled,"jqGridSelectFilled",{elem:p,options:z.searchoptions||E,cm:z,cmName:z.name,iCol:d,mode:A}),o.autosearch===!0&&v.change(function(){return D(),!1})}}break;case"text":v=a("<input role='search' type='text' class='"+w+"' name='"+(z.index||z.name)+"' id='"+y(z.name)+"' aria-labelledby='jqgh_"+k.id+"_"+z.name+"' value='"+(void 0!==e.defaultValue?e.defaultValue:"")+"'/>"),O.append(v),e.attr&&v.attr(e.attr),J.push({elem:v[0],options:e}),o.autosearch===!0&&(o.searchOnEnter?v.keypress(function(a){var b=a.charCode||a.keyCode||0;return 13===b?(D(),!1):this}):v.keydown(function(a){var b=a.which;switch(b){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:n&&clearTimeout(n),n=setTimeout(function(){D()},o.autosearchDelay)}}));break;case"custom":O.append("<span style='width:100%;padding:0;box-sizing:border-box;' class='"+w+"' name='"+(z.index||z.name)+"' id='"+y(z.name)+"'/>");try{if(!a.isFunction(e.custom_element))throw"e1";var _=e.custom_element.call(h,void 0!==e.defaultValue?e.defaultValue:"",e);if(!_)throw"e2";_=a(_).addClass("customelement"),I.find("span[name='"+(z.index||z.name)+"']").append(_)}catch(a){"e1"===a&&l.call(h,r,"function 'custom_element' "+t.nodefined,s),"e2"===a?l.call(h,r,"function 'custom_element' "+t.novalue,s):l.call(h,r,"string"==typeof a?a:a.message,s)}}}F.append(I),F.find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function(){a(this).addClass(u)},function(){a(this).removeClass(u)}),K.append(F),o.searchOperators||N.hide()}),a(i.hDiv).find(">div>.ui-jqgrid-htable>thead").append(K),a.each(J,function(){c.bindEv.call(h,this.elem,this.options)}),o.searchOperators&&(a(".soptclass",K).click(function(b){var c=a(this).offset(),d=c.left,e=c.top;I(this,d,e),b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").hide()})),a(".clearsearchclass",K).click(function(){var b,c,d=a(this).closest(".ui-search-clear"),e=d.siblings(".ui-search-oper"),f=e.children("a"),g=f.data("soper"),h=parseInt(e.data("colindex"),10),i=d.siblings(".ui-search-input"),j=p[h],l=a.extend({},j.searchoptions||{}),m=l.defaultValue||"";switch(j.stype){case"select":m?i.find("select").val(m):i.find("select")[0].selectedIndex=0;break;case"checkbox":C(i.find("input[type=checkbox]"),-1);break;default:i.find("input").val(m)}("nu"===g||"nn"===g||a.inArray(g,k.customUnaryOperations)>=0)&&(b=l.sopt?l.sopt[0]:"select"===j.stype||"checkbox"===j.stype?"eq":o.defaultSearch,c=null!=H&&null!=H[b]?H[b].operand:o.operands[b]||"",f.data("soper",b).text(c)),o.autosearch===!0&&D()}),h.ftoolbar=!0,h.triggerToolbar=D,h.clearToolbar=E,h.toggleToolbar=F,k.frozenColumns===!0&&(j.jqGrid("destroyFrozenColumns"),j.jqGrid("setFrozenColumns")),j.on("jqGridRefreshFilterValues.filterToolbar"+(o.loadFilterDefaults?" jqGridAfterLoadComplete.filterToolbar":""),function(){var b,c,d,e,f,g=B(!0)||{};if(o.stringResult||o.searchOperators||"local"===k.datatype||!k.search){for(b in g)if(g.hasOwnProperty(b)&&(c=g[b],d=a(z(b)),d.length>0)){if("SELECT"===d[0].tagName.toUpperCase()&&d[0].multiple)d.val(c.data.split(k.inFilterSeparator||","));else if(d.is("input[type=checkbox]")){var h=d.closest("th.ui-th-column");if(h.length>0){var i=A((k.colModel[h[0].cellIndex]||{}).searchoptions||{});C(d,c.data===i.on?1:c.data===i.off?0:-1)}}else a.trim(d.val())!==c.data&&d.val(c.data);e=d.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass"),e.data("soper",c.op),e.text(o.operands[c.op])}for(f=0;f<k.colModel.length;f++)b=k.colModel[f].name,g.hasOwnProperty(b)||a(z(b)).val("")}})}})},destroyFilterToolbar:function(){return this.each(function(){var b=this;b.ftoolbar&&(b.triggerToolbar=null,b.clearToolbar=null,b.toggleToolbar=null,b.ftoolbar=!1,a(b.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),b.p.frozenColumns===!0&&a(b).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},destroyGroupHeader:function(b){return void 0===b&&(b=!0),this.each(function(){var c,d,e,f,g,h=this,i=h.grid,j=h.p.colModel,k=a("table.ui-jqgrid-htable thead",i.hDiv);if(i){a(h).off(".setGroupHeaders");var l=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),m=i.headers;for(c=0,d=m.length;c<d;c++){g=j[c].hidden?"none":"",e=a(m[c].el).width(m[c].width).css("display",g);try{e.removeAttr("rowSpan")}catch(a){e.attr("rowSpan",1)}l.append(e),f=e.children("span.ui-jqgrid-resize"),f.length>0&&(f[0].style.height=""),e.children("div")[0].style.top=""}a(k).children("tr.ui-jqgrid-labels").remove(),a(k).prepend(l),b===!0&&a(h).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(b){return b=a.extend({useColSpanStyle:!1,applyLabelClasses:!0,groupHeaders:[]},b||{}),this.each(function(){this.p.groupHeader=b;var d,e,g,h,i,j,k,l,m,n,o,p,q,r,s=this,t=0,u=s.p,v=u.colModel,w=v.length,x=s.grid.headers,y=a("table.ui-jqgrid-htable",s.grid.hDiv),z=c.isCellClassHidden,A=y.children("thead").children("tr.ui-jqgrid-labels"),B=A.last().addClass("jqg-second-row-header"),C=y.children("thead"),D=y.find(".jqg-first-row-header");void 0===D[0]?D=a("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):D.empty();var E=function(a,b){var c;for(c=0;c<b.length;c++)if(b[c].startColumnName===a)return b[c];return 0};for(a(s).prepend(C),g=a("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header"),d=0;d<w;d++)if(i=x[d].el,j=a(i),e=v[d],k={height:"0",width:x[d].width+"px",display:e.hidden?"none":""},a("<th>",{role:"gridcell"}).css(k).addClass("ui-first-th-"+u.direction+(b.applyLabelClasses?" "+(e.labelClasses||""):"")).appendTo(D),i.style.width="",r=f.call(s,"colHeaders","ui-th-column-header ui-th-"+u.direction+" "+(b.applyLabelClasses?e.labelClasses||"":"")),m=E(e.name,b.groupHeaders)){for(n=m.numberOfColumns,o=m.titleText,p=0,l=0;l<n&&d+l<w;l++)v[d+l].hidden||z(v[d+l].classes)||p++;h=a("<th>").addClass(r).css({height:"22px","border-top":"0 none"}).html(o),p>0&&h.attr("colspan",String(p)),u.headertitles&&h.attr("title",h.text()),0===p&&h.hide(),j.before(h),g.append(i),t=n-1}else 0===t?b.useColSpanStyle?j.attr("rowspan",A.length+1):(a("<th>").addClass(r).css({display:e.hidden?"none":"","border-top":"0 none"}).insertBefore(j),g.append(i)):(g.append(i),t--);q=a(s).children("thead"),q.prepend(D),g.insertAfter(B),y.prepend(q),b.useColSpanStyle&&(y.find("span.ui-jqgrid-resize").each(function(){var b=a(this).parent();b.is(":visible")&&(this.style.cssText="height:"+b.height()+"px !important;cursor:col-resize;")}),y.find(".ui-th-column>div").each(function(){var b=a(this),c=b.parent();c.is(":visible")&&c.is(":has(span.ui-jqgrid-resize)")&&!b.hasClass("ui-jqgrid-rotate")&&!b.hasClass("ui-jqgrid-rotateOldIE")&&b.css("top",(c.height()-b.outerHeight(!0))/2+"px")})),a(s).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var a=this;if(0===a.length)return 0;a=a[0];var b,c=a.p.colModel,d=c.length,e=-1;for(b=0;b<d&&c[b].frozen===!0;b++)e=b;return e+1},setFrozenColumns:function(b){return b=b||{},this.each(function(){var c=this,e=a(c),g=c.p,h=c.grid;if(h&&null!=g&&g.frozenColumns!==!0){var i,j,k=g.colModel,l=k.length,m=-1,n=!1,o=[],p=d(g.id),q=f.call(c,"states.hover"),r=f.call(c,"states.disabled");if(g.subGrid!==!0&&g.treeGrid!==!0&&!g.scroll){for(i=0;i<l&&k[i].frozen===!0;i++)n=!0,m=i,o.push("#jqgh_"+p+"_"+d(k[i].name));if(g.sortable&&(j=a(h.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels"),j.sortable("destroy"),e.jqGrid("setGridParam",{sortable:{options:{items:o.length>0?">th:not(:has("+o.join(",")+"),:hidden)":">th:not(:hidden)"}}}),e.jqGrid("sortableColumns",j)),m>=0&&n){var s=g.caption?a(h.cDiv).outerHeight():0,t=a(".ui-jqgrid-htable",g.gView).height();g.toppager&&(s+=a(h.topDiv).outerHeight()),g.toolbar[0]===!0&&"bottom"!==g.toolbar[1]&&(s+=a(h.uDiv).outerHeight()),h.fhDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===g.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+s+"px;height:"+t+"px;' class='"+f.call(c,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>"),h.fbDiv=a("<div style='position:absolute;overflow:hidden;"+("rtl"===g.direction?"right:0;":"left:0;")+"top:"+(parseInt(s,10)+parseInt(t,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>"),a(g.gView).append(h.fhDiv);var u=a(".ui-jqgrid-htable",g.gView).clone(!0),v=u[0].tHead.rows;if(g.groupHeader){a(v[0].cells).filter(":gt("+m+")").remove(),a(v).filter(".jqg-third-row-header").each(function(){a(this).children("th[id]").each(function(){var b,d=a(this).attr("id");d&&d.substr(0,c.id.length+1)===c.id+"_"&&(b=d.substr(c.id.length+1),g.iColByName[b]>m&&a(this).remove())})});var w,x,y=-1,z=-1;a(v).filter(".jqg-second-row-header").children("th").each(function(){if(w=parseInt(a(this).attr("colspan")||1,10),x=parseInt(a(this).attr("rowspan")||1,10),x>1?(y++,z++):w&&(y+=w,z++),y===m)return!1}),y!==m&&(z=m),a(v).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){a(this).children(":gt("+z+")").remove()})}else a(v).each(function(){a(this).children(":gt("+m+")").remove()});if(a(u).width(1),a(h.fhDiv).append(u).scroll(function(){this.scrollLeft=0}),g.footerrow){var A=a(".ui-jqgrid-bdiv",g.gView).height();h.fsDiv=a("<div style='position:absolute;"+("rtl"===g.direction?"right:0;":"left:0;")+"top:"+(parseInt(s,10)+parseInt(t,10)+parseInt(A,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),a(g.gView).append(h.fsDiv);var B=a(".ui-jqgrid-ftable",g.gView).clone(!0);a("tr",B).each(function(){a("td:gt("+m+")",this).remove()}),a(B).width(1),a(h.fsDiv).append(B)}e.on("jqGridSortCol.setFrozenColumns",function(b,c,d){var e=a("tr.ui-jqgrid-labels:last th:eq("+g.lastsort+")",h.fhDiv),f=a("tr.ui-jqgrid-labels:last th:eq("+d+")",h.fhDiv);a("span.ui-grid-ico-sort",e).addClass(r),a(e).attr("aria-selected","false"),a("span.ui-icon-"+g.sortorder,f).removeClass(r),a(f).attr("aria-selected","true"),g.viewsortcols[0]||g.lastsort!==d&&(a("span.s-ico",e).hide(),a("span.s-ico",f).show())}),a(g.gView).append(h.fbDiv),a(h.bDiv).scroll(function(){a(h.fbDiv).scrollTop(a(this).scrollTop())}),a(h.fbDiv).on("mousewheel.setFrozenColumns DOMMouseScroll.setFrozenColumns",function(d){h.bDiv.scrollTop+=a.isFunction(b.mouseWheel)?b.mouseWheel.call(c,d):"mousewheel"===d.type?-d.originalEvent.wheelDelta/10:6*d.originalEvent.detail}),g.hoverrows===!0&&a(g.idSel).off("mouseover.jqGrid mouseout.jqGrid");var C=function(a,b){var c=a.height();Math.abs(c-b)>=1&&b>0&&(a.height(b),c=a.height(),Math.abs(b-c)>=1&&a.height(b+Math.round(b-c)))},D=function(a,b){var c=a.width();Math.abs(c-b)>=1&&(a.width(b),c=a.width(),Math.abs(b-c)>=1&&a.width(b+Math.round(b-c)))},E=function(b,c,d,e){var f,h,j,k,l,m,n,o,p,q,r,s,t,u=a(c).position().top;if(null!=b&&b.length>0){if(b[0].scrollTop=c.scrollTop,b.css("rtl"===g.direction?{top:u,right:0}:{top:u,left:0}),j=b.children("table").children("thead").children("tr"),k=a(c).children("div").children("table").children("thead").children("tr"),0===k.length&&(j=a(b.children("table")[0].rows),k=a(a(c).children("div").children("table")[0].rows)),h=Math.min(j.length,k.length),r=h>0?a(j[0]).position().top:0,s=h>0?a(k[0]).position().top:0,d>=0)for(e>=0&&(h=Math.min(e+1,h)),f=d;f<h;f++)if(l=a(k[f]),"none"!==l.css("display")&&l.is(":visible")){if(u=l.position().top,m=a(j[f]),n=m.position().top,o=l.height(),null!=g.groupHeader&&g.groupHeader.useColSpanStyle)for(t=l[0].cells,i=0;i<t.length;i++)q=t[i],null!=q&&"TH"===q.nodeName.toUpperCase()&&(o=Math.max(o,a(q).height()));p=o+(u-s)+(r-n),C(m,p)}C(b,c.clientHeight)}},F={resizeDiv:!0,resizedRows:{iRowStart:0,iRowEnd:-1}},G={header:F,resizeFooter:!0,body:F};e.on("jqGridAfterGridComplete.setFrozenColumns",function(){a(g.idSel+"_frozen").remove(),a(h.fbDiv).height(h.hDiv.clientHeight);var b=a(this).clone(!0),c=b[0].rows,d=e[0].rows;if(a(c).filter("tr[role=row]").each(function(){a(this.cells).filter("td[role=gridcell]:gt("+m+")").remove()}),h.fbRows=c,b.width(1).attr("id",g.id+"_frozen"),b.appendTo(h.fbDiv),g.hoverrows===!0){var f=function(b,c,d){a(b)[c](q),a(d[b.rowIndex])[c](q)};a(c).filter(".jqgrow").hover(function(){f(this,"addClass",d)},function(){f(this,"removeClass",d)}),a(d).filter(".jqgrow").hover(function(){f(this,"addClass",c)},function(){f(this,"removeClass",c)})}E(h.fhDiv,h.hDiv,0,-1),E(h.fbDiv,h.bDiv,0,-1),h.sDiv&&E(h.fsDiv,h.sDiv,0,-1)});var H=function(b){a(h.fbDiv).scrollTop(a(h.bDiv).scrollTop()),b.header.resizeDiv&&E(h.fhDiv,h.hDiv,b.header.resizedRows.iRowStart,b.header.resizedRows.iRowEnd),b.body.resizeDiv&&E(h.fbDiv,h.bDiv,b.body.resizedRows.iRowStart,b.body.resizedRows.iRowEnd),b.resizeFooter&&h.sDiv&&b.resizeFooter&&E(h.fsDiv,h.sDiv,0,-1);var c=h.fhDiv[0].clientWidth;b.header.resizeDiv&&null!=h.fhDiv&&h.fhDiv.length>=1&&C(a(h.fhDiv),h.hDiv.clientHeight),b.body.resizeDiv&&null!=h.fbDiv&&h.fbDiv.length>0&&D(a(h.fbDiv),c),b.resizeFooter&&null!=h.fsDiv&&h.fsDiv.length>=0&&D(a(h.fsDiv),c)};a(g.gBox).on("resizestop.setFrozenColumns",function(){setTimeout(function(){H(G)},50)}),e.on("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",function(a,b){var c=e.jqGrid("getInd",b);H({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:c,iRowEnd:c}}})}),e.on("jqGridResizeStop.setFrozenColumns",function(){H(G)}),e.on("jqGridResetFrozenHeights.setFrozenColumns",function(a,b){H(b||G)}),h.hDiv.loading||e.triggerHandler("jqGridAfterGridComplete"),g.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var b=this,c=a(b),e=b.grid,g=b.p,h=d(g.id);if(e&&g.frozenColumns===!0){if(a(e.fhDiv).remove(),a(e.fbDiv).off(".setFrozenColumns"),a(e.fbDiv).remove(),e.fhDiv=null,e.fbDiv=null,e.fbRows=null,g.footerrow&&(a(e.fsDiv).remove(),e.fsDiv=null),c.off(".setFrozenColumns"),g.hoverrows===!0){var i,j=f.call(b,"states.hover");c.on("mouseover.jqGrid",function(b){i=a(b.target).closest("tr.jqgrow"),"ui-subgrid"!==a(i).attr("class")&&a(i).addClass(j)}).on("mouseout.jqGrid",function(b){i=a(b.target).closest("tr.jqgrow"),a(i).removeClass(j)})}if(g.frozenColumns=!1,g.sortable){var k=a(e.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels");k.sortable("destroy"),c.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+h+"_cb,#jqgh_"+h+"_rn,#jqgh_"+h+"_subgrid),:hidden)"}}}),c.jqGrid("sortableColumns",k)}}})}})});
//# sourceMappingURL=grid.custom.js.map