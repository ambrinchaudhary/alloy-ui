AUI.add("aui-scheduler-calendar",function(D){var I=D.Lang,J=I.isArray,C=I.isString,G=function(A){return(A instanceof D.SchedulerEvent);},E="scheduler-calendar",B="color",K="events",H="pallete";var F=D.Component.create({NAME:E,ATTRS:{color:{valueFn:function(){var L=this;var M=L.get(H);var A=Math.ceil(Math.random()*M.length)-1;return M[A];},validator:C},name:{value:"(no name)",validator:C},pallete:{value:["#d96666","#e67399","#b373b3","#8c66d9","#668cb3","#668cd9","#59bfb3","#65ad89","#4cb052","#8cbf40","#bfbf4d","#e0c240","#f2a640","#e6804d","#be9494","#a992a9","#8997a5","#94a2be","#85aaa5","#a7a77d","#c4a883","#c7561e","#b5515d","#c244ab","#603f99","#536ca6","#3640ad","#3c995b","#5ca632","#7ec225","#a7b828","#cf9911","#d47f1e","#b56414","#914d14","#ab2671","#9643a5","#4585a3","#737373","#41a587","#d1bc36","#ad2d2d"],validator:J}},EXTENDS:D.Base,AUGMENTS:D.SchedulerEventSupport,prototype:{initializer:function(){var A=this;A.after("eventsChange",A._afterEventsChange);A._uiSetEvents(A.get(K));},_afterEventsChange:function(L){var A=this;A._uiSetEvents(L.newVal);},_uiSetEvents:function(L){var A=this;D.Array.each(L,function(M,N){M.set(B,A.get(B));});}}});D.SchedulerCalendar=F;},"@VERSION@",{requires:["aui-scheduler-event"],skinnable:true});