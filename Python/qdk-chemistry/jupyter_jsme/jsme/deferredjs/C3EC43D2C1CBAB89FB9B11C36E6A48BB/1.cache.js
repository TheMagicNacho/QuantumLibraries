$wnd.jsme.runAsyncCallback1('var G7="Assignment of aromatic double bonds failed",Coa="Smiles with leading parenthesis are not supported",Doa="SmilesParser: \'+\' found outside brackets",Eoa="SmilesParser: closing bracket without opening one",Foa="SmilesParser: dangling open bond",Goa="SmilesParser: dangling ring closure",Hoa="SmilesParser: nested square brackets found",Ioa="SmilesParser: ring closure to same atom",Joa="SmilesParser: ringClosureAtom number out of range",Koa="SmilesParser: unexpected character found: \'",Loa="SmilesParser: unknown element label found";\nfunction H7(a,b){var c;c=a.x[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function I7(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function J7(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function K7(){this.b=!0}x(24,1,{},K7);_.a=null;_.b=!1;_.c=0;_.d=0;_.e=0;_.f=null;\nfunction L7(a,b){var c,d,e;1==a.b.B[b]&&Ft(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);Jw(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[Ht(a.b,c,e)]=!1}}function M7(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=Ht(a.b,d,g)&&a.a[Ht(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,L7(a,c))}}while(h)}function N7(){}x(29,1,{},N7);_.a=null;_.b=null;\nfunction O7(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction Moa(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&bx(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function P7(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(Et,Bs,-1,4,2),this.f=C(B,w,-1,4,1),this.k=C(B,w,-1,4,1),-1!=c&&1==d&&(O7(this,2147483647,e,!0),this.d=0))}x(30,1,{},P7);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction Q7(a){Dt(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.H.c;++b)if(0==(a.H.s[b]&67108864)&&3==a.S[b]){var c=a.H;c.s[b]|=67108864;c.K&=3}for(b=0;b<a.H.d;++b)3==a.k[b]&&2==Qt(a.H,b)&&Ft(a.H,b,26)}}function R7(){this.e=1}x(33,1,{},R7);\nfunction S7(a){var b,c;if(null==a||0==a.length||0==yx(a).length)return OR(new nQ,n,!0);c=new Lx;var d=new N7,e=iX(yx(a)),f,g,h,j,l,m,q,r,t,A,v,s,F,G,H,u,ba,aa,N,da,rb,sb,Na,Ya,S,pa,qa,fa,Fa,Ja,Ca,Ob,R,ua,pb,Kb,Za;d.b=c;sw(d.b);Na=null;j=C(B,w,-1,64,1);j[0]=-1;pa=C(B,w,-1,64,1);qa=C(B,w,-1,64,1);for(F=0;64>F;++F)pa[F]=-1;g=S=0;fa=Ya=Ja=!1;m=0;Fa=e.length;for(l=1;32>=e[S];)++S;for(;S<Fa;)if(Ca=e[S++]&65535,T7(Ca)||42==Ca){h=0;v=-1;G=sb=H=!1;if(Ja)82==Ca&&BP(e[S]&65535)?(aa=null!=String.fromCharCode(e[S+\n1]&65535).match(/\\d/)?2:1,h=Vw(tw(e,S-1,1+aa)),S+=aa):(u=String.fromCharCode(e[S]&65535).toLowerCase().charCodeAt(0)==(e[S]&65535)&&T7(e[S]&65535)?2:1,h=Vw(tw(e,S-1,u)),S+=u-1,v=0),64==e[S]&&(++S,64==e[S]&&(G=!0,++S),sb=!0),72==e[S]&&(++S,v=1,BP(e[S]&65535)&&(v=e[S]-48,++S));else if(42==Ca)h=6,H=!0;else switch(String.fromCharCode(Ca).toUpperCase().charCodeAt(0)){case 66:S<Fa&&114==e[S]?(h=35,++S):h=5;break;case 67:S<Fa&&108==e[S]?(h=17,++S):h=6;break;case 70:h=9;break;case 73:h=53;break;case 78:h=\n7;break;case 79:h=8;break;case 80:h=15;break;case 83:h=16}if(0==h)throw new Hu(Loa);f=nw(d.b,h);H?(fa=!0,Mw(d.b,f,1)):Jw(d.b,f,String.fromCharCode(Ca).toLowerCase().charCodeAt(0)==Ca&&T7(Ca));if(-1!=v&&1!=h){q=C(dv,Ts,-1,1,1);q[0]=v<<24>>24;var Va=d.b,Pb=f,Vb=q;null!=Vb&&0==Vb.length&&(Vb=null);null==Vb?null!=Va.r&&(Va.r[Pb]=null):(null==Va.r&&(Va.r=C(lw,o,3,Va.G,0)),Va.r[Pb]=Vb)}s=j[m];-1!=j[m]&&128!=l&&rw(d.b,f,j[m],l);l=1;j[m]=f;0!=g&&(Kw(d.b,f,g),g=0);(da=!Na?null:qx(Na,KS(s)))&&O7(da,f,S,1==\nh);sb&&(!Na&&(Na=new Fx),Gx(Na,KS(f),new P7(d,f,s,v,S,G)))}else if(46==Ca)l=128;else if(61==Ca)l=2;else if(35==Ca)l=4;else if(BP(Ca))if(N=Ca-48,Ja){for(;S<Fa&&BP(e[S]&65535);)N=10*N+e[S]-48,++S;g=N}else{Ya&&S<Fa&&BP(e[S]&65535)&&(N=10*N+e[S]-48,++S);Ya=!1;if(64<=N)throw new Hu(Joa);if(-1==pa[N])pa[N]=j[m],qa[N]=S-1;else{if(pa[N]==j[m])throw new Hu(Ioa);Na&&((da=qx(Na,KS(pa[N])))&&O7(da,j[m],qa[N],!1),(da=qx(Na,KS(j[m])))&&O7(da,pa[N],S-1,!1));rw(d.b,j[m],pa[N],l);pa[N]=-1}l=1}else if(43==Ca){if(!Ja)throw new Hu(Doa);\nfor(r=1;43==e[S];)++r,++S;1==r&&BP(e[S]&65535)&&(r=e[S]-48,++S);Dw(d.b,j[m],r)}else if(45==Ca){if(Ja){for(r=-1;45==e[S];)--r,++S;-1==r&&BP(e[S]&65535)&&(r=48-e[S],++S);Dw(d.b,j[m],r)}}else if(40==Ca){if(-1==j[m])throw new Hu(Coa);j[m+1]=j[m];++m}else if(41==Ca)--m;else if(91==Ca){if(Ja)throw new Hu(Hoa);Ja=!0}else if(93==Ca){if(!Ja)throw new Hu(Eoa);Ja=!1}else if(37==Ca)Ya=!0;else if(58==Ca)if(Ja){for(ba=0;BP(e[S]&65535);)ba=10*ba+e[S]-48,++S;d.b.u[j[m]]=ba}else l=64;else if(47==Ca)l=17;else if(92==\nCa)l=9;else throw new Hu(Koa+String.fromCharCode(Ca)+ne);if(1!=l)throw new Hu(Foa);for(F=0;64>F;++F)if(-1!=pa[F])throw new Hu(Goa);var ea=d.b,ra,ca,Hb,ka,zb,X;X=C(B,w,-1,ea.o,1);ka=C(Et,Bs,-1,ea.o,2);for(ca=0;ca<ea.p;++ca)for(Hb=0;2>Hb;++Hb)bx(ea,ea.y[Hb][ca])&&!bx(ea,ea.y[1-Hb][ca])&&(ka[ea.y[Hb][ca]]=!0);for(zb=ea.o-1;0<=zb&&ka[zb];)X[zb]=zb,--zb;for(ra=0;ra<=zb;++ra)if(ka[ra]){X[ra]=zb;X[zb]=ra;for(--zb;0<=zb&&ka[zb];)X[zb]=zb,--zb}else X[ra]=ra;d.b.J=!0;Dt(d.b,1);for(f=0;f<d.b.o;++f)if(null!=\n(null==c.r?null:null==c.r[f]?null:tw(c.r[f],0,c.r[f].length))&&!Aw(d.b,f))if(A=(null==d.b.r?null:d.b.r[f])[0],d.b.x[f]<(Du(),kw).length&&null!=kw[d.b.x[f]]){t=!1;Ob=kv(d.b,f);Ob-=mv(d.b,f,Ob);for(ua=kw[d.b.x[f]],pb=0,Kb=ua.length;pb<Kb;++pb)if(R=ua[pb],Ob<=R){t=!0;R!=Ob+A&&Cw(d.b,f,Ob+A);break}t||Cw(d.b,f,Ob+A)}var O,ec,Wb,gd;for(O=0;O<d.b.c;++O)if(7==d.b.x[O]&&0==d.b.q[O]&&3<kv(d.b,O)&&0<d.b.k[O])for(gd=0;gd<d.b.f[O];++gd)if(ec=Nt(d.b,O,gd),Wb=Ht(d.b,O,gd),1<Qt(d.b,Wb)&&Xw(d.b.x[ec])){4==d.b.B[Wb]?\nFt(d.b,Wb,2):Ft(d.b,Wb,1);Dw(d.b,O,d.b.q[O]+1);Dw(d.b,ec,d.b.q[ec]-1);break}var Lb,Xa,ga,Qb,Ia,T,za,Ab,Uc,bc,Nc,kc,bb,Ic,yb,Oa;Dt(d.b,1);d.a=C(Et,Bs,-1,d.b.d,2);for(ga=0;ga<d.b.d;++ga)64==d.b.B[ga]&&(Ft(d.b,ga,1),d.a[ga]=!0);Oa=new Gt(d.b,3);Ab=C(Et,Bs,-1,Oa.i.c,2);for(bb=0;bb<Oa.i.c;++bb){Ic=Tt(Oa.i,bb);Ab[bb]=!0;for(za=0;za<Ic.length;++za)if(!Aw(d.b,Ic[za])){Ab[bb]=!1;break}if(Ab[bb]){yb=Tt(Oa.j,bb);for(za=0;za<yb.length;++za)d.a[yb[za]]=!0}}for(ga=0;ga<d.b.d;++ga)if(!d.a[ga]&&0!=Oa.b[ga]&&Aw(d.b,\nD(d.b,0,ga))&&Aw(d.b,D(d.b,1,ga)))a:{var yc=d,mb=ga,lc=void 0,K=void 0,Bb=void 0,Vc=void 0,dd=void 0,tb=void 0,hb=void 0,Wc=void 0,Xc=void 0,nd=void 0,Oc=void 0,la=void 0,Jc=void 0,Wc=C(B,w,-1,yc.b.c,1),tb=C(B,w,-1,yc.b.c,1),hb=C(B,w,-1,yc.b.c,1),Xc=C(B,w,-1,yc.b.c,1),lc=D(yc.b,0,mb),K=D(yc.b,1,mb);tb[0]=lc;tb[1]=K;hb[0]=-1;hb[1]=mb;Wc[lc]=1;Wc[K]=2;Xc[lc]=-1;Xc[K]=lc;for(nd=dd=1;dd<=nd&&15>Wc[tb[dd]];){Jc=tb[dd];for(Oc=0;Oc<yc.b.f[Jc];++Oc)if(Bb=Nt(yc.b,Jc,Oc),Bb!=Xc[Jc]){Vc=Ht(yc.b,Jc,Oc);if(Bb==\nlc){hb[0]=Vc;for(la=0;la<=nd;++la)yc.a[hb[Oc]]=!0;break a}Aw(yc.b,Bb)&&0==Wc[Bb]&&(++nd,tb[nd]=Bb,hb[nd]=Vc,Wc[Bb]=Wc[Jc]+1,Xc[Bb]=Jc)}++dd}}Dt(d.b,3);for(bb=0;bb<Oa.i.c;++bb)if(Ab[bb]){Ic=Tt(Oa.i,bb);for(za=0;za<Ic.length;++za){var Cd;var Ib=d,Ga=Ic[za],Pc=void 0;16==Ib.b.x[Ga]&&0>=Ib.b.q[Ga]||6==Ib.b.x[Ga]&&0!=Ib.b.q[Ga]||!Aw(Ib.b,Ga)?Cd=!1:(Pc=null==rv(Ib.b,Ga)?0:(null==Ib.b.r?null:Ib.b.r[Ga])[0],Cd=1>yw(Ib.b,Ga)-kv(Ib.b,Ga)-Pc||5!=Ib.b.x[Ga]&&6!=Ib.b.x[Ga]&&7!=Ib.b.x[Ga]&&8!=Ib.b.x[Ga]&&15!=Ib.b.x[Ga]&&\n16!=Ib.b.x[Ga]&&33!=Ib.b.x[Ga]&&34!=Ib.b.x[Ga]?!1:!0);if(!Cd){Jw(d.b,Ic[za],!1);for(bc=0;bc<d.b.f[Ic[za]];++bc)d.a[Ht(d.b,Ic[za],bc)]=!1}}}M7(d);for(bb=0;bb<Oa.i.c;++bb)if(Ab[bb]&&6==Tt(Oa.j,bb).length){yb=Tt(Oa.j,bb);Uc=!0;for(Qb=0,Ia=yb.length;Qb<Ia;++Qb)if(ga=yb[Qb],!d.a[ga]){Uc=!1;break}Uc&&(L7(d,yb[0]),L7(d,yb[2]),L7(d,yb[4]),M7(d))}for(kc=5;4<=kc;--kc){do{Nc=!1;for(ga=0;ga<d.b.d;++ga)if(d.a[ga]){for(za=Lb=0;2>za;++za){T=D(d.b,za,ga);for(bc=0;bc<d.b.f[T];++bc)d.a[Ht(d.b,T,bc)]&&++Lb}if(Lb==kc){L7(d,\nga);M7(d);Nc=!0;break}}}while(Nc)}for(ga=0;ga<d.b.d;++ga)if(d.a[ga])throw new Hu(G7);for(Xa=0;Xa<d.b.c;++Xa)if(Aw(d.b,Xa))throw new Hu(G7);d.b.r=null;d.b.J=!1;var Xb,ub,tc,qb,Qc,yd,Yc,zc,Pa,uc,Kc;Dt(d.b,3);Pa=!1;uc=C(B,w,-1,2,1);Kc=C(B,w,-1,2,1);zc=C(B,w,-1,2,1);for(ub=0;ub<d.b.d;++ub)if(!su(d.b,ub)&&2==d.b.B[ub]){for(qb=0;2>qb;++qb){uc[qb]=-1;zc[qb]=-1;Xb=D(d.b,qb,ub);for(Yc=0;Yc<d.b.f[Xb];++Yc)tc=Ht(d.b,Xb,Yc),tc!=ub&&(17==d.b.B[tc]||9==d.b.B[tc]?(uc[qb]=Nt(d.b,Xb,Yc),Kc[qb]=tc):zc[qb]=Nt(d.b,Xb,\nYc));if(-1==uc[qb])break}if(-1!=uc[0]&&-1!=uc[1]){yd=d.b.B[Kc[0]]!=d.b.B[Kc[1]];Qc=!1;for(qb=0;2>qb;++qb)-1!=zc[qb]&&zc[qb]<uc[qb]&&(Qc=!Qc);Rw(d.b,ub,yd^Qc?2:1,!1);Pa=!0}}for(ub=0;ub<d.b.d;++ub)(17==d.b.B[ub]||9==d.b.B[ub])&&Ft(d.b,ub,1);Pa&&(d.b.K|=4);ey(new R7,d.b);if(Na){for(rb=U7((Za=new hY(Na),new V7(Na,Za)));CX(rb.a.a);)da=(rb.a.b=Kv(rb.a.a)).wi(),Lw(d.b,da.a,Moa(da,X),!1);d.b.K|=4}cx(d.b);Q7(d.b);fa&&Tw(d.b,!0);b=new kx(c);return yC(b.a.a)}\nfunction T7(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function U7(a){a=new kY(a.b.a);return new W7(a)}function V7(a,b){this.a=a;this.b=b}x(634,622,{},V7);_.ti=function(a){a:{var b,c;for(c=new kY((new hY(this.a)).a);CX(c.a);)if(b=c.b=Kv(c.a),b=b.wi(),null==a?null==b:AB(a,b)){a=!0;break a}a=!1}return a};_.Ve=function(){return U7(this)};_.og=function(){return this.b.a.c};_.a=null;_.b=null;function W7(a){this.a=a}x(635,1,{},W7);_.qe=function(){return CX(this.a.a)};\n_.re=function(){return(this.a.b=Kv(this.a.a)).wi()};_.se=function(){jY(this.a)};_.a=null;function X7(){QX();this.a=6122;this.b=12230397}x(651,1,{},X7);x(699,594,bt);\n_.Wd=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(US(),VS)&&this.b.i==(WS(),XS))try{var f=this.b.b,g,h,j;j=null;h=new Lx;ux(new Ix,h,new KO(new PO(f)))&&(g=new kx(h),j=yC(g.a.a));b=j;if(null==b)throw new Hu("V3000 read failed.");a=Jq;this.a.Ec.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=uu(l),E(l,101))c=l,d=c.Ud();else throw l;}else if(this.b.a==$Y)try{var m=this.b.b,q,r,t,A,v,s,F;b=-1!=m.indexOf(Dg)?(q=hX(m,Dg),r=3<=q.length&&0<q[2].length,t=2<=q.length&&0<q[1].length,A=S7(q[0]),\nv=r?S7(q[2]):S7(n),s=t?S7(q[1]):S7(n),F=n,F+=Yd,F+=KT(1,3)+KT(1,3),t&&(F+=KT(1,3)),F+=ha,F+=Wd+A,F+=Wd+v,t&&(F+=Wd+s),F):S7(m);this.b.f==(RS(),$S)?a="readSMIRKS":this.b.f==XY&&(a="readSMILES");this.a.Ec.a="SMILES conversion provided by OpenChemLib"}catch(G){if(G=uu(G),E(G,101))c=G,d="SMILES parsing error:"+c.Ud();else throw G;}else if(d="Invalid or unsupported input",this.a.Vc&&!this.b.d)try{var H,u=new K7,ba=yx(this.b.b),aa;if(null==ba||0==ba.length)aa=null;else{var N=iX(ba),da,rb,sb,Na,Ya;if(null==\nN)aa=null;else{I7(u,N,0);da=$(u,4);Na=$(u,4);8<da&&(da=Na);rb=$(u,da);sb=$(u,Na);Ya=new zx(rb,sb);var S=null,pa,qa,fa,Fa,Ja,Ca,Ob,R,ua,pb,Kb,Za,Va,Pb,Vb,ea,ra,ca,Hb,ka,zb,X,O,ec,Wb,gd,Lb,Xa,ga,Qb,Ia,T,za,Ab,Uc,bc,Nc,kc,bb,Ic,yb,Oa,yc,mb,lc,K,Bb,Vc,dd,tb,hb,Wc,Xc,nd,Oc,la,Jc,Cd,Ib,Ga,Pc,Xb,ub,tc,qb,Qc,yd,Yc,zc,Pa,uc,Kc;Qc=8;u.f=Ya;sw(u.f);if(!(null==N||0==N.length))if(null!=S&&0==S.length&&(S=null),I7(u,N,0),fa=$(u,4),ea=$(u,4),8<fa&&(Qc=fa,fa=ea),0==fa)Tw(u.f,1==$(u,1));else{Fa=$(u,fa);Ja=$(u,ea);\nOc=$(u,fa);Ib=$(u,fa);Cd=$(u,fa);Wb=$(u,fa);for(R=0;R<Fa;++R)nw(u.f,6);for(K=0;K<Oc;++K)qw(u.f,$(u,fa),7);for(K=0;K<Ib;++K)qw(u.f,$(u,fa),8);for(K=0;K<Cd;++K)qw(u.f,$(u,fa),$(u,8));for(K=0;K<Wb;++K)Dw(u.f,$(u,fa),$(u,4)-8);gd=1+Ja-Fa;za=$(u,4);Vb=0;Nw(u.f,0,0);Ow(u.f,0,0);Pw(u.f,0,0);Ab=null!=S&&39<=S[0];Kc=Pa=Yc=qb=0;Qb=ga=!1;Ab&&(S.length>2*Fa-2&&39==S[2*Fa-2]||S.length>3*Fa-3&&39==S[3*Fa-3]?(Qb=!0,Bb=(ga=S.length==3*Fa-3+9)?3*Fa-3:2*Fa-2,Pb=86*(S[Bb+1]-40)+S[Bb+2]-40,qb=Math.pow(10,Pb/2E3-1),Bb+=\n2,yd=86*(S[Bb+1]-40)+S[Bb+2]-40,Yc=Math.pow(10,yd/1500-1),Bb+=2,zc=86*(S[Bb+1]-40)+S[Bb+2]-40,Pa=Math.pow(10,zc/1500-1),ga&&(Bb+=2,uc=86*(S[Bb+1]-40)+S[Bb+2]-40,Kc=Math.pow(10,uc/1500-1))):ga=S.length==3*Fa-3);u.b&&ga&&(S=null,Ab=!1);for(K=1;K<Fa;++K)Uc=$(u,za),0==Uc?(Ab&&(Nw(u.f,K,u.f.D[0].a+8*(S[2*K-2]-83)),Ow(u.f,K,u.f.D[0].b+8*(S[2*K-1]-83)),ga&&Pw(u.f,K,u.f.D[0].c+8*(S[2*Fa-3+K]-83))),++gd):(Vb+=Uc-1,Ab&&(Nw(u.f,K,cu(u.f,Vb)+S[2*K-2]-83),Ow(u.f,K,du(u.f,Vb)+S[2*K-1]-83),ga&&Pw(u.f,K,eu(u.f,Vb)+\n(S[2*Fa-3+K]-83))),rw(u.f,Vb,K,1));for(K=0;K<gd;++K)rw(u.f,$(u,fa),$(u,fa),1);dd=C(Et,Bs,-1,Ja,2);for(ca=0;ca<Ja;++ca)switch(zb=$(u,2),zb){case 0:H7(u.f,D(u.f,0,ca))||H7(u.f,D(u.f,1,ca))?Ft(u.f,ca,32):dd[ca]=!0;break;case 2:Ft(u.f,ca,2);break;case 3:Ft(u.f,ca,4)}qa=$(u,fa);for(K=0;K<qa;++K)if(R=$(u,fa),8==Qc)Ga=$(u,2),3==Ga?(Fw(u.f,R,1,0),Lw(u.f,R,1,!1)):Lw(u.f,R,Ga,!1);else switch(Ga=$(u,3),Ga){case 4:Lw(u.f,R,1,!1);Fw(u.f,R,1,$(u,3));break;case 5:Lw(u.f,R,2,!1);Fw(u.f,R,1,$(u,3));break;case 6:Lw(u.f,\nR,1,!1);Fw(u.f,R,2,$(u,3));break;case 7:Lw(u.f,R,2,!1);Fw(u.f,R,2,$(u,3));break;default:Lw(u.f,R,Ga,!1)}8==Qc&&0==$(u,1)&&(u.f.F=!0);pa=$(u,ea);for(K=0;K<pa;++K)if(ca=$(u,ea),1==u.f.B[ca])switch(Ga=$(u,3),Ga){case 4:Rw(u.f,ca,1,!1);Qw(u.f,ca,1,$(u,3));break;case 5:Rw(u.f,ca,2,!1);Qw(u.f,ca,1,$(u,3));break;case 6:Rw(u.f,ca,1,!1);Qw(u.f,ca,2,$(u,3));break;case 7:Rw(u.f,ca,2,!1);Qw(u.f,ca,2,$(u,3));break;default:Rw(u.f,ca,Ga,!1)}else Rw(u.f,ca,$(u,2),!1);Tw(u.f,1==$(u,1));Ob=null;for(Jc=0;1==$(u,1);)switch(T=\nJc+$(u,4),T){case 0:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Mw(u.f,R,2048);break;case 1:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Xc=$(u,8),Kw(u.f,R,Xc);break;case 2:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),Ft(u.f,ca,64);break;case 3:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Mw(u.f,R,4096);break;case 4:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),tc=$(u,4)<<3,Mw(u.f,R,tc);break;case 5:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Ca=$(u,2)<<1,Mw(u.f,R,Ca);break;case 6:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Mw(u.f,R,1);break;\ncase 7:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),mb=$(u,4)<<7,Mw(u.f,R,mb);break;case 8:la=$(u,fa);for(K=0;K<la;++K){R=$(u,fa);Kb=$(u,4);ua=C(B,w,-1,Kb,1);for(tb=0;tb<Kb;++tb)pb=$(u,8),ua[tb]=pb;var td=u.f,eb=R,fc=ua;null==td.t&&(td.t=C(iu,Js,91,td.G,0));null!=fc&&Pu(fc);td.t[eb]=fc;td.K=0;td.E=!0}break;case 9:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),tc=$(u,2)<<4,Sw(u.f,ca,tc);break;case 10:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),X=$(u,4),Sw(u.f,ca,X);break;case 11:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),\nMw(u.f,R,8192);break;case 12:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),O=$(u,8)<<6,Sw(u.f,ca,O);break;case 13:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Pc=$(u,3)<<14,Mw(u.f,R,Pc);break;case 14:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),nd=$(u,5)<<17,Mw(u.f,R,nd);break;case 15:Jc=16;break;case 16:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),ub=$(u,3)<<22,Mw(u.f,R,ub);break;case 17:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Cw(u.f,R,$(u,4));break;case 18:la=$(u,fa);Wc=$(u,4);for(K=0;K<la;++K){R=$(u,fa);Ia=$(u,Wc);hb=C(dv,\nTs,-1,Ia,1);for(tb=0;tb<Ia;++tb)hb[tb]=$(u,7)<<24>>24;var hd=u.f,mc=R,Zc=tw(hb,0,hb.length),nc=void 0;if(null!=Zc)if(0==Zc.length)Zc=null;else if(nc=Vw(Zc),0!=nc&&Q(Zc,iw[nc])||Q(Zc,Eg))qw(hd,mc,nc),Zc=null;null==Zc?null!=hd.r&&(hd.r[mc]=null):(null==hd.r&&(hd.r=C(lw,o,3,hd.G,0)),hd.r[mc]=iX(Zc))}break;case 19:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),ec=$(u,3)<<25,Mw(u.f,R,ec);break;case 20:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),ub=$(u,3)<<14,Sw(u.f,ca,ub);break;case 21:la=$(u,fa);for(K=0;K<la;++K)R=\n$(u,fa),Hw(u.f,R,$(u,2)<<4);break;case 22:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Mw(u.f,R,268435456);break;case 23:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),Sw(u.f,ca,131072);break;case 24:la=$(u,ea);for(K=0;K<la;++K)ca=$(u,ea),Ca=$(u,2)<<18,Sw(u.f,ca,Ca);break;case 25:for(K=0;K<Fa;++K)if(1==$(u,1)){var lf=u.f;lf.s[K]|=512}break;case 26:la=$(u,ea);Ob=C(B,w,-1,la,1);for(K=0;K<la;++K)Ob[K]=$(u,ea);break;case 27:la=$(u,fa);for(K=0;K<la;++K)R=$(u,fa),Mw(u.f,R,536870912)}Ct(new Ut(u.f),dd);if(null!=Ob)for(Hb=\n0,ka=Ob.length;Hb<ka;++Hb)ca=Ob[Hb],Ft(u.f,ca,2==u.f.B[ca]?4:2);Lb=0;if(null==S&&N.length>u.d+1&&(32==N[u.d+1]||9==N[u.d+1]))S=N,Lb=u.d+2;if(null!=S)try{if(33==S[Lb]||35==S[Lb]){I7(u,S,Lb+1);ga=1==$(u,1);Qb=1==$(u,1);Xb=2*$(u,4);ra=1<<Xb;ca=0;for(R=1;R<Fa;++R)ca<Ja&&D(u.f,1,ca)==R?(Oa=D(u.f,0,ca++),yb=1):(Oa=0,yb=8),Nw(u.f,R,cu(u.f,Oa)+yb*($(u,Xb)-~~(ra/2))),Ow(u.f,R,du(u.f,Oa)+yb*($(u,Xb)-~~(ra/2))),ga&&Pw(u.f,R,eu(u.f,Oa)+yb*($(u,Xb)-~~(ra/2)));Va=ga?1.5:(Du(),24);Za=uw(u.f,Fa,Ja,Va);if(35==S[Lb]){lc=\n0;yc=C(B,w,-1,Fa,1);for(R=0;R<Fa;++R)lc+=yc[R]=Ou(u.f,R);for(R=0;R<Fa;++R)for(K=0;K<yc[R];++K)mb=nw(u.f,1),rw(u.f,R,mb,1),Nw(u.f,mb,cu(u.f,R)+($(u,Xb)-~~(ra/2))),Ow(u.f,mb,du(u.f,R)+($(u,Xb)-~~(ra/2))),ga&&Pw(u.f,mb,eu(u.f,R)+($(u,Xb)-~~(ra/2)));Fa+=lc}if(Qb){var gc=$(u,Xb),Ac=Math.log(2E3)*Math.LOG10E*gc/(ra-1)-1;qb=Math.pow(10,Ac);Yc=qb*J7($(u,Xb),ra);Pa=qb*J7($(u,Xb),ra);ga&&(Kc=qb*J7($(u,Xb),ra));yb=qb/Za;for(R=0;R<Fa;++R)Nw(u.f,R,Yc+yb*cu(u.f,R)),Ow(u.f,R,Pa+yb*du(u.f,R)),ga&&Pw(u.f,R,Kc+yb*\neu(u.f,R))}else{yb=1.5/Za;for(R=0;R<Fa;++R)Nw(u.f,R,yb*cu(u.f,R)),Ow(u.f,R,yb*du(u.f,R)),ga&&Pw(u.f,R,yb*eu(u.f,R))}}else if(ga&&!Qb&&0==qb&&(qb=1.5),0!=qb&&0!=u.f.p){for(ca=Za=0;ca<u.f.p;++ca)bc=cu(u.f,D(u.f,0,ca))-cu(u.f,D(u.f,1,ca)),Nc=du(u.f,D(u.f,0,ca))-du(u.f,D(u.f,1,ca)),kc=ga?eu(u.f,D(u.f,0,ca))-eu(u.f,D(u.f,1,ca)):0,Za+=Math.sqrt(bc*bc+Nc*Nc+kc*kc);Za/=u.f.p;Ic=qb/Za;for(R=0;R<u.f.o;++R)Nw(u.f,R,cu(u.f,R)*Ic+Yc),Ow(u.f,R,du(u.f,R)*Ic+Pa),ga&&Pw(u.f,R,eu(u.f,R)*Ic+Kc)}}catch(ib){if(ib=uu(ib),\nE(ib,101))bb=ib,bb.Ud(),S=null,ga=!1;else throw ib;}if((Xa=null!=S&&!ga)||u.b){Dt(u.f,3);for(ca=0;ca<u.f.d;++ca)if(2==Qt(u.f,ca)&&!su(u.f,ca)&&0==(u.f.z[ca]&3)){var Dd=u.f;Dd.z[ca]|=16777216}}!Xa&&u.b&&(u.f.K|=4,Vc=new R7,Vc.i=new X7,ey(Vc,u.f),Xa=!0);Xa?(cx(u.f),Q7(u.f)):ga||(u.f.K|=4)}aa=Ya}}H=new kx(aa);b=yC(H.a.a);a="readOCLCode";d=null}catch(Pd){if(Pd=uu(Pd),!E(Pd,101))throw Pd;}e=!1;if(null!=b&&null==d)try{if((e=YS(this.a,b,!1))&&this.c){var nb=this.a;if(nb.v){var ee=nb.v;ee.a=a;iR(ee,nb.Tb,\n0,0,0)}nb.Dc=!0}}catch(fe){if(fe=uu(fe),E(fe,101))d="Invalid converted molfile";else throw fe;}this.a.ac=e;this.e?e?fT(this.e):gT(this.e,new Hu(d)):null!=d&&k4(this.a,d);this.d&&uM(this.a)};Z(634);Z(635);Z(24);Z(29);Z(30);U(Q0)(1);\n//@ sourceURL=1.js\n')