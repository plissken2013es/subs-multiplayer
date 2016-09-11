;(function () {
    var pressedKeys = {};
    
    function setKey(event, status) {
        var code = event.keyCode;
        var key;
        
        switch (code) {
            case 32:
                key = "SPACE";
                break;
            case 37:
                key = "LEFT";
                break;
            case 38:
                key = "UP";
                break;
            case 39:
                key = "RIGHT";
                break;
            case 40:
                key = "DOWN";
                break;
            default:
                key = String.fromCharCode(code);
        }
        
        pressedKeys[key] = status;
    }
    
    document.addEventListener("keydown", function(e) {
        setKey(e, true);
    });
    
    document.addEventListener("keyup", function(e) {
        setKey(e, false);
    });
    
    window.addEventListener("blur", function() {
        pressedKeys = {};
    });
    
    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();

// jfxr
for(_='o.`Sfxr^32@*`#ba*(01]=+=switch(length;case set102=`){return ,e[a2*Math.random()-1;Array(=new a.ynthvar for(	arams),=1=0,&&(function;break;this. ^P(Settings=(a	b=0;24>b;b++)this[String.fromCharCode(97+b)a[b]||0;c<.c=.);c=b+c+e;if(.18>cd=.18/c;b*=d,c*=d,e*=d}}} ^S(_p^P;a,b,c,d,e,f,g,h,i,j,k,l;re=(a=_p;d00/(f*f+.0e00/(g*g+.0f-h*h*h*.,g=-i*i*i*1e-6,a||(k=.5-n/2,l=5e-5*-oh+l*ll>0?-.9:10ij==m?0:(1-m)1-m)*2e4+@},totalRe=(re();d=_p;a=d.b*d.b*1e5,b=d.c*d.c*1e5,c=d.e*d.e*1e5+12,3(a+b+c)/3|0)},sWave=(m,no=_p,p!s||`v,qv#v*.1,r+3e-4#w,ss#s#s*.1,t+1e-4#t,u!s,vx#x,wg,xq||`r,yr#r#r*.2,zq#q`q<0?-0:0Ap?((1-`p)1-`p)*2e4|0)+@:0,Bd,Cj/2,Dk#k*.,Ea,F=a,G/a,H/b,I/c,J=5/(1+`u#u*20).+s);J>.8J=.8J-J;	Q,S,U,W,Y,Z,K=!1,LMNOPRTVX$_4aa@=_.--;)_[0;	=a--;)aa[b	=0;n>;++if(K);if(A&&++X>=AXre()j&&++i>=jjd*=hfg,d*=f,d>ed=e,w>0K=!0)S=d,C>0$D,S*+Math.sin($)*CS|8>SS=8E||(kl,0>k?k=0:k>.5k=.5)++M>F)M++L1:F=b2:F=c}L0:N=M*G1:N+21-M*H)*B2:N-M*I3:NK=!0}xzy,U=0|z,0>U?U=-U:U>3U023)p&&rq*=r,1e-5>q?qe-5:q>.1q=.1)Z=0;	ca=8;ca--;if(T++,T>=ST%=S,3==E))	da=ada--;)aa[dE0:Y=k>T/S?.5:-.51:Y-T/S*22:W=T/S,W=6.28318531W>.5?W-1:WY.27@3954*W+.405284735*W*W0>W?1:-1Y=.225(0>Y?-1:1)*Y*Y-Y)+Y3:Y=aa[Math.abs(@*T/S|0)]}pQ=R,s*=t,0>s?s=0:s>.1s=.1u?(P(Y-R)*s,P*=J):(R=Y,P=0RP,OR-Q,O*-q,Y=Ox_[V%4Y,Y_[(V-U+4)%4],V++ZY}Z*=.125*N*v,m[Z>?@767:-1>=Z?-@768:@767*Z|0}n}}s^S;window.jsfxr=(as._p.Settings(a);b=s.totalRe(cUint84(b+1)/2|0)+44d=2*s.sWave(new Uint16c.buffer,44beUint@c.buffer,0,44);e[0]17914101d+362]16@80727354450944]65655376441007882008]0485789]635706010d,d44;	fg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789+/",h="data:audio/wav;se64,";d>f;f3i=c[f]<<16|c[f+1]<<8|c[f+2];hg[i>>18]+g[i>>12&63]+g[i>>6&63]+g[63&i]}h};';G=/[-#@^`]/.exec(_);)with(_.split(G))_=join(shift());eval(_)

// sonant-x
for(_='lfoj+=`3276^-^8@d=@>d?@:d>^7?^7:d,V)}Enew OfunctionN=N(RenQre$=String.fromCharCode(#;b$ak;case Z_waveform],Y$leaseX),K$turn JsetTimeout(I)Jvoid IHat.songrowLQBuffer0,ODe){var Rfor(a=,b=0;sonantx.},Music255>>8&sustaingetGQerorSound(athis.tack,0E	osc]<<8)waveSizeAudio,b`1,b%1e3===0&&-a>cHinstr..prototype.sonantx;!N("use strict";N eJMh.sin(6.283184*aEN fJe)<0?-1:1}N gJa%1-.5}N hb=a%1*4;J2>b?b-1:3-b}N A$turn.00390625*Mh.pow(1.059463094,a-128EN k,dIN(e=OUint8Array*b*2Kf=e.lQgth-2,gf>=0;)if(e[f]=e[f+1]=128,f-=2g,0);IN(d(eE	;Ig		N l,b,d,e,fg=d.fx_delay_time*e>>1,h=d.fx_delay_amt/,i=ARfor(d=,e=0;b-g>i;k=4*i,l=4*(i+gKm=a[l]+[l+1+[k+2]+[k+3@)*h;if[l]=&m,a[l+1]=m,m=a[l+2]+[l+3+[k]+[k+1@)*h,a[l+2]=&m,a[l+3]=m,++i,e`1,e%1e3===0&&-d>cHA	If	;IA	sonantx={};a=4410b=2,c=33,d=null,i=[e,f,g,h];=NmixBuf=a,=a.lQgth/b/2},WaveRd,e,f,g,h,i,k,a=mixBuf,c=,l=c*b*2;for(h=l-8,i=h-36,g#82,73,77&h,h,h>>16&,h>>24&,87,65,86,69,102,109,116,32,16,1,2,68,172,16,177,2,4,16,1097,116,97,&i,i,i>>16&,i>>24&Kd=0;l>d;for(f="",e=0;256>e&&l>d;++e,d`2)k=4*[d]+[d+1@Kk=@>k?@:k>^7?^7:k,f+#&k,k);g`f}Jg},Ra=Wave(Kb=O("da:audio/wav;base64,"+btoa));Jb.p$load="none",b.load(Kb},Renull===d&&(d=OContext);f=mixBuf,g=,h=d.c$e(b,,aKi=h.ChannelDa(0KA=h.ChannelDa(1Kk=lg>k;d=4*(f[4*k]+(f[4*k+1@);if(Vi[k]=d/^8,d=4*(f[4*k+2]+(f[4*k+3@KVA[k]=d/^8,k`1l	IN(e(hE	;Il	,=N,binstr=a,=b||5605,_j=i[a.jY1=i[a.1Y2=i[a.2Y=a.Qv_tack,=a.Qv_,X=a.Qv_X,panF$q=Mh.pow(2,a.fx_pan_f$q-8)/,jF$q=Mh.pow(2,a.j_f$q-8)/},gQRb,c,dfor(g=(,0Kh=i=A(b+12*(1_oct-8)+1_det)*(1+8e-4*1_detuneKk=A(b+12*(2_oct-8)+2_det)*(1+8e-4*2_detuneKl=fx_$sonance/,m=n=o=++X-1;o>=0;--op=o+d,q=_j(p*jF$q)*j_amt/512+.5,r=1;o<?r=o/:o>=+&&(r-=(o--)/X);s=i;j_1_f$q&&(s`qK1_xQv&&(s*=r*rKg`s;t=1(g)*1_vol;s=k,2_xQv&&(s*=r*rKh`s,t`2(h)*2_vol,noise_fader&&(t`(2*Mh.random()-1)*noise_fader*rKt*=r/;u=fx_f$q;j_fx_f$q&&(u*=qKu=1.5*Mh.sin(3.141592*u/aKm`u*n;v=l*(t-n)-m;switch(n`u*v,fx_filtercase 1:t=vZ2:t=mZ3:t=nZ4:t=m+v}if(s=e(p*panF$q)*fx_pan_amt/512+.5,t*=39*Qv_master,p=4*p,p+3<c.lQgthw=c[p]+(c[p+1+t*(1-s);c[p]=&w,c[p+1]=w,w=c[p+2]+(c[p+3+t*s,c[p+2]=&w,c[p+3]=w}}},=N,bc=++X-1+32*,d=this;k(c,N(ed.gQ,e,0Kl(e,c,d.instr,d.,N(b(O(e)EEE,c$e=N,b,Nb.()EE,c$e=N,b,Na.(bE)Rbsong=b,=a*bLQgQereTrack=N,d,ef=this;k(,N(gh=f.,i=f.*b*2,A=f.,k=f.QdPtern,m=O,AKn=o=p=qRfor(b=;;)if(32!==pif(o===k-1Hr,0);d=a.p[o];if(de=a.c[d-1].n[p];e&&m.gQ(e,g,nEif(n`A,p`1,-b>cHq	else p=o`1},rRl(g,h,a,A,tE,s=ti>s;f=d[s]+(d[s+1+g[s]+(g[s+1@;if(d[s]=&f,d[s+1]=f,s`2t	Ie	;Iq	)=Nb=this;k(,N(cd=eRd<bDa.lQgth?(d`1,b.gQereTrack(bDa[d-1],c,e)):a(O(c)E;e(E)c$e=N(N(ba(b.()E)c$e=N(N(bb.EE}();';G=/[-H-KX-Z#$QRNOEV@^`j]/.exec(_);)with(_.split(G))_=join(shift());eval(_)

// song
!function(){"use strict";window.song={songLen:119,songData:[{osc1_oct:10,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:59,osc1_waveform:0,osc2_oct:12,osc2_det:7,osc2_detune:0,osc2_xenv:0,osc2_vol:95,osc2_waveform:0,noise_fader:0,env_attack:0,env_sustain:0,env_release:47272,env_master:21,fx_filter:2,fx_freq:7800,fx_resonance:240,fx_delay_time:8,fx_delay_amt:34,fx_pan_freq:3,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[1,1,1,1,1,2,0,0,0,0,2,1,1,2],c:[{n:[142,0,0,0,142,0,0,142,147,145,0,0,140,0,0,0,138,0,0,0,0,0,0,0,0,0,0,0,138,140,0,0]},{n:[135,0,0,0,135,0,0,135,140,138,0,0,137,0,0,0,130,0,0,0,134,0,0,0,142,0,0,0,126,128,0,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:3,osc2_oct:8,osc2_det:0,osc2_detune:8,osc2_xenv:0,osc2_vol:74,osc2_waveform:3,noise_fader:0,env_attack:47272,env_sustain:40909,env_release:46363,env_master:255,fx_filter:2,fx_freq:224,fx_resonance:67,fx_delay_time:2,fx_delay_amt:25,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[0,0,0,1,1,2,3,2,3,2,2,1,1,2],c:[{n:[118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:192,osc1_waveform:2,osc2_oct:8,osc2_det:7,osc2_detune:0,osc2_xenv:0,osc2_vol:172,osc2_waveform:2,noise_fader:0,env_attack:48181,env_sustain:80909,env_release:51818,env_master:210,fx_filter:2,fx_freq:1300,fx_resonance:43,fx_delay_time:6,fx_delay_amt:172,fx_pan_freq:1,fx_pan_amt:125,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:3,lfo_amt:180,lfo_waveform:0,p:[0,0,1,0,1,2,3,0,3,2,2,1,1,2,1,1,2,2,2,1],c:[{n:[118,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,145,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:6,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:193,osc1_waveform:0,osc2_oct:5,osc2_det:7,osc2_detune:0,osc2_xenv:0,osc2_vol:80,osc2_waveform:0,noise_fader:0,env_attack:50,env_sustain:0,env_release:17272,env_master:255,fx_filter:1,fx_freq:0,fx_resonance:254,fx_delay_time:0,fx_delay_amt:0,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:3,p:[0,1,1,1,0,2,1,2,2,2,2,1,0,2,0,1,2,2,2],c:[{n:[142,0,0,0,0,0,0,142,0,142,0,0,0,0,140,0,138,0,0,0,0,0,0,138,0,138,0,0,0,140,0,0]},{n:[135,0,0,0,0,0,135,135,0,135,0,0,0,0,145,0,142,0,0,0,0,0,142,142,0,142,0,0,0,0,145,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:200,osc1_waveform:0,osc2_oct:8,osc2_det:7,osc2_detune:8,osc2_xenv:0,osc2_vol:200,osc2_waveform:3,noise_fader:0,env_attack:36800,env_sustain:36800,env_release:36800,env_master:20,fx_filter:4,fx_freq:11025,fx_resonance:240,fx_delay_time:6,fx_delay_amt:100,fx_pan_freq:3,fx_pan_amt:254,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:6,lfo_amt:210,lfo_waveform:0,p:[0,0,0,0,1,0,1,0,0,2,2,1,0,2,0,1,2,2,2,1,1],c:[{n:[142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[135,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:0,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:148,env_attack:3636,env_sustain:4545,env_release:39090,env_master:31,fx_filter:2,fx_freq:3100,fx_resonance:122,fx_delay_time:5,fx_delay_amt:132,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:5,lfo_amt:147,lfo_waveform:0,p:[0,0,0,1,2,0,1,0,2,2,0,4,3,0,0,0,3,4],c:[{n:[142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[135,0,0,0,0,0,0,0,135,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,142,0,0,0,0,0,0,0]},{n:[142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:187,osc1_waveform:2,osc2_oct:5,osc2_det:0,osc2_detune:2,osc2_xenv:1,osc2_vol:161,osc2_waveform:2,noise_fader:0,env_attack:100,env_sustain:1818,env_release:2727,env_master:60,fx_filter:1,fx_freq:1900,fx_resonance:162,fx_delay_time:2,fx_delay_amt:153,fx_pan_freq:6,fx_pan_amt:61,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:2,lfo_amt:196,lfo_waveform:3,p:[0,0,0,0,0,0,0,0,1,1,1,2,2,1],c:[{n:[135,135,138,135,140,138,137,135,135,138,135,140,138,135,142,0,142,142,145,142,147,145,144,142,142,145,142,147,145,142,0,0]},{n:[142,142,144,142,147,145,144,142,142,144,142,147,145,144,142,0,138,138,141,138,143,141,140,138,141,138,143,141,140,138,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:0,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:34,env_attack:50,env_sustain:2727,env_release:50,env_master:43,fx_filter:1,fx_freq:3224,fx_resonance:254,fx_delay_time:6,fx_delay_amt:36,fx_pan_freq:7,fx_pan_amt:254,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:5,lfo_amt:187,lfo_waveform:0,p:[0,0,0,0,0,0,0,0,0,1,1,2,2,1,1,1,2],c:[{n:[135,135,135,135,0,135,0,135,0,135,0,135,135,135,135,135,142,142,142,142,0,142,0,142,0,142,0,142,142,142,0,142]},{n:[142,142,142,142,0,142,0,142,0,142,0,142,142,142,142,142,138,138,138,138,0,138,0,138,0,138,0,138,138,138,0,138]}]}],rowLen:7350,endPattern:22}}();

;(function() {
    var audioCtx = new AudioContext();
    var source;
    var songGen = new sonantx.MusicGenerator(song);
    songGen.createAudioBuffer(function(buffer) {
        source = audioCtx.createBufferSource(); // Create Sound Source
        source.buffer = buffer; // Add Buffered Data to Object
        source.connect(audioCtx.destination); // Connect Sound Source to Output
        audioCtx.isPlaying = true;
        source.loop = true;
        source.start();
    });
/*
    console.log(audioCtx.isPlaying);
    if (audioCtx.isPlaying) {
        audioCtx.suspend();
        audioCtx.isPlaying = false;
    } else {
        audioCtx.resume();
        audioCtx.isPlaying = true;
    }
*/
    window.audioCtx = audioCtx;
})();

;(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];
    
    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
            _load(urlOrArr);
        }
    }
    
    function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        } else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;
                
                if (isReady()) {
                    readyCallbacks.forEach(function(func) {
                        func();
                    });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }
    
    function get(url) {
        return resourceCache[url];
    }
    
    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }
    
    function onReady(func) {
        readyCallbacks.push(func);
    }
    
    window.resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();

;(function() {
    function Sprite(url, pos, size, speed, frames, flip, dir, once) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === "number" ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || "h";
        this.once = once || false;
        this.flip = flip || false;
    }

    Sprite.prototype.update = function(dt) {
        this._index += this.speed * dt;
    };
    
    Sprite.prototype.reset = function() {
        this._index = 0;
        this.done = false;
    },

    Sprite.prototype.render = function(ctx) {
        var frame;

        if (this.speed > 0) {
            var max = this.frames.length;
            var idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        } else {
            frame = 0;
        }

        var x = this.pos[0];
        var y = this.pos[1];

        if (this.dir == "v") {
            y += frame * this.size[1];
        } else {
            x += frame * this.size[0];
        }

        ctx.drawImage(resources.get(this.url),
                      x, y,
                      this.size[0], this.size[1],
                      0, 0, 
                      this.size[0], this.size[1]);
    };
    
    window.Sprite = Sprite;
})();

(function () {

    var socket, sendBtn, message, playerName, buttons, playerSelect, online, tutorial;

    function setMessage(text) {
        message.innerHTML = text;
    }
    
    function displayScore(text) {
        online.innerHTML = text;
    }

    function bindClient() {
        socket.on("welcome", function (num) {
             displayScore("Current players online: " + num);
        });
        
        socket.on("start", function (cfg) {
            cfg.socket = socket;
            initGame(false, cfg);
            setTimeout(function() {
                playerSelect.className = "hidden";
                tutorial.className = "hidden";
            }, 1000);
        });
/*
        socket.on("shipPosition", function (pos) {
            receiveShipPosition(pos);
        });  
*/
        socket.on("controls", function(ev, pos) {
            receiveShipPosition(ev, pos);
        });
        
        socket.on("syncronizeSunk", function (score) {
            receiveShipSunk(score);
        });  
        
        socket.on("launchCharge", function (pos) {
            launchCharge(pos);
        });  
        
        socket.on("launchSub", function (cfg) {
            launchSub(cfg);
        });    
                
        socket.on("silent", function () {
            if (role == "ship" && silentRunning>0) {
                silentRunning--;
                silentCnt = 720;
                aa.play("f");
            }
        });    
        
        socket.on("launchTorpedo", function (pos, updateSub) {
            launchTorpedo(pos, updateSub);
        });        
        
        socket.on("end", function () {
            setMessage("Opponent has left!<br/>Waiting for opponent...");
            playerSelect.className = "";
            initGame(true);
        });

        socket.on("connect", function () {
            setMessage("Welcome. Please enter your name.");
        });

        socket.on("disconnect", function () {
            setMessage("Connection lost!");
        });

        socket.on("error", function () {
            setMessage("Connection error!");
        });
        
        socket.on("glitch", function (gs) {
            receiveGlitch(gs);
        });        
        
        socket.on("rot", function (r, t) {
            receiveRot(r, t);
        });
        
        sendBtn.addEventListener("click", function (e) {
            socket.emit("name", playerName.value);
            buttons.className = "hidden";
            setMessage("Waiting for opponent...");
        }, false);
    }

    /**
     * Client module init
     */
    function initClient() {
        socket = io({ upgrade: false, transports: ["websocket"] });
        
        playerName = document.getElementById("playerName");
        playerSelect = document.getElementById("playerSelect");
        sendBtn = document.getElementById("sendName");
        message = document.getElementById("message");
        buttons = document.getElementById("buttons");
        online = document.getElementById("online");
        tutorial = document.getElementById("tutorial");
        
        bindClient();
    }

    window.addEventListener("load", initClient, false);
    
    // ----------------------------------------------------------------------------------------
    // ------------------------------------- M I  G M  ----------------------------------------
    // -------------------------------------  A N  A E ----------------------------------------
    // ----------------------------------------------------------------------------------------
    var requestAnimFrame = (function(){
        return window.requestAnimationFrame    ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // Arcade Audio ----------------------------------
    function ArcadeAudio() {
      this.sounds = {};
    }
    ArcadeAudio.prototype.add = function( key, count, settings ) {
      this.sounds[ key ] = [];
      settings.forEach( function( elem, index ) {
        this.sounds[ key ].push( {
          tick: 0,
          count: count,
          pool: []
        } );
        for( var i = 0; i < count; i++ ) {
          var audio = new Audio();
          audio.src = jsfxr( elem );
          this.sounds[ key ][ index ].pool.push( audio );
        }
      }, this );
    };
    ArcadeAudio.prototype.play = function( key ) {
      var sound = this.sounds[ key ];
      var soundData = sound.length > 1 ? sound[ Math.floor( Math.random() * sound.length ) ] : sound[ 0 ];
      soundData.pool[ soundData.tick ].play();
      soundData.tick < soundData.count - 1 ? soundData.tick++ : soundData.tick = 0;
    };
    var aa = new ArcadeAudio();
    aa.add("a", 5, [
        [3,,0.3527,0.2102,0.4498,0.149,,-0.0138,0.0177,0.0536,,0.0003,,,,0.2985,0.0878,-0.1867,0.9976,-0.0193,,,0.036,0.31]
    ]);

    aa.add("b", 5, [
        [3,0.0135,0.3705,0.1714,0.4132,0.0472,,0.1456,-0.0176,0.16,0.89,-0.28,,,,,0.3,0.08,0.9996,-0.16,0.0136,,0.0019,0.31],
        [3,0.0135,0.3705,0.1714,0.4132,0.0472,,0.1456,-0.0176,0.16,0.89,-0.28,,,,0.89,0.62,0.08,0.9996,-0.16,0.0136,,0.0019,0.31]
    ]);

    aa.add("c", 5, [
        [3,,0.1945,0.3182,0.4554,0.3556,,-0.0189,-0.0208,,0.0254,0.0694,,,-0.0212,0.0022,0.0051,0.0078,1,0.0057,,0.0362,-0.0353,0.24]
    ]);

    aa.add("d", 5, [
        [3,,0.2018,,0.4471,0.4448,,0.4382,,,,,,,,0.52,,,1,,,,,0.31]
    ]);

    aa.add("e", 5, [
        [2,,0.1926,,0.1814,0.209,,0.3425,,,,,,,,0.5793,,,1,,,,,0.31]
    ]);
    
    aa.add("f", 5, [
        [2,,0.3895,,0.4194,0.2692,,0.1371,,0.6871,0.3262,,,,,,,,1,,,,,0.5]
    ]);
    // Arcade Audio ----------------------------------

    // Create the canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 224;
    //document.body.appendChild(canvas);

    var screen = document.createElement("canvas");
    var screenCtx = screen.getContext("2d");
    screen.width = canvas.width * 2;
    screen.height = canvas.height * 2;
    screenCtx.webkitImageSmoothingEnabled = false;
    screenCtx.mozImageSmoothingEnabled = false;
    screenCtx.imageSmoothingEnabled = false; /// future
    document.body.appendChild(screen);

    var shipSpeed = 28, chargeSpeed = 14, numCharges = 5, subScores = [20, 30, 50, 60, 70, 80], subSpeed = 6, torpedoSpeed = 16, numTorpedoes = 3, demoMode = false, playerShipName = "PLAYER 1", playerSubName = "PLAYER 2", tutSeen = false;

    var ship, lastTime, gameTime, isGameOver, charges, chargeExplosions, lastFireCharge, subs, points, subsAvailable,  activeSubs, levels, indicators, indCnt, torpedoes, torpedoExplosions, lastFireTorpedo, scorePlayerShip, scorePlayerSub, timeLeft, timeInterval, bodyCount, role, timeout, netCnt, shipImmune, immuneCnt, movingLeft, movingRight, glitch = [], rot, tutCnt, tutoTxt1, tutoTxt2, silentRunning, silentCnt;

    start(true); // demo mode ON
    //start(); // demo mode OFF

    function initVars() {
        ship = {
            pos: [canvas.width/2 - 20, 32 - 13],
            sprite: new Sprite("img/s.png", [0, 0], [40, 13], 0, [0])
        };
        shipImmune = movingLeft = movingRight = false;
        tutoTxt1 = tutoTxt2 = "";
        if (!demoMode) tutSeen = true;
        lastTime = gameTime = lastFireCharge = indCnt = lastFireTorpedo = scorePlayerShip = scorePlayerSub = netCnt = immuneCnt = tutCnt = silentCnt = 0;
        isGameOver = false; 
        silentRunning = 1;
        rot = [0, 0, 0];
        charges = [];
        chargeExplosions = [];
        subs = [];
        points = [];
        subsAvailable = [1,2,3,4,5,6,7,8];
        activeSubs = [];
        levels = [];
        indicators = [];
        torpedoes = [];
        torpedoExplosions = [];
        timeLeft = 99;
        bodyCount = [];
        clearTimeout(timeout);
        clearInterval(timeInterval);
    }

    // The main game loop
    function main() {
        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        lastTime = now;
        requestAnimFrame(main);
    }

    function initGame(demoOn, cfg) {
        if (demoOn != undefined) demoMode = demoOn;
        lastTime = Date.now();
        initVars();

        if (cfg) {
            role = cfg.role;
            if (role == "ship") {
                playerShipName = cfg.p1;
                playerSubName = cfg.p2;
            } else {
                playerShipName = cfg.p2;
                playerSubName = cfg.p1;
            }
        } else {
            role = null;
            playerShipName = "PLAYER 1";
            playerSubName = "PLAYER 2";
        }
        
        initLevels();
        if (role === "sub" || demoMode) {
            setTimeout(launchSub.bind(this), 500);
        }
        initTime();
        main();
    }

    function start(demoOn) {
        if (demoOn != undefined) demoMode = demoOn;
        resources.load([
            "img/s.png",
            "img/sc.png",
            "img/sce.png",
            "img/scb.png",
            "img/i.png",
            "img/su.png",
            "img/sup.png",
            "img/sut.png",
            "img/te.png"
        ]);
        resources.onReady(initGame);    
    }
    
    function initLevels() {
        for (var i=0; i<8; i++) {
            levels.push(40 + i*20);
        }
        levels = shuffleArr(levels);
    }

    function initTime() {
        timeInterval = setInterval(updateTimer.bind(this), 1000);
    }

    function launchCharge(pos) {
        if (role == "ship") socket.emit("launchCharge", pos);

        var charge = {
            pos: [ship.pos[0] + pos, ship.pos[1] - 2],
            sprite: new Sprite("img/scb.png", [0, 0], [4, 3], 4, [0, 1, 2], null, "v")
        };
        charges.push(charge);

        lastFireCharge = Date.now();
        aa.play("d");
    }    

    function launchTorpedo(pos, updateSub) {
        if (role == "sub" && !demoMode) {
            socket.emit("launchTorpedo", pos, updateSub);
        } else if (updateSub) {
            subs[updateSub[0]].pos = updateSub[1];
        }

        var torp = {
            pos: pos,
            sprite: new Sprite("img/sut.png", [0, 0], [3, 3], 4, [0, 1, 0, 1, 0, 0])
        };
        torp.score = 100 + (torp.pos[1] - 40) * 2;
        torpedoes.push(torp);
        aa.play("e");
        lastFireTorpedo = Date.now();
    }

    function launchShip() {
        shipImmune = true;
        immuneCnt = 0;
        ship.isSinking = false;
        ship.sprite.speed = 0;
        ship.sprite.frames = [0];
        ship.sprite.once = false;
        ship.sprite.reset();
    }

    function launchSub(cfg) {
        if (subsAvailable.length) {
            var dir = rand(0, 1);
            if (cfg) dir = cfg.dir;
            var off = dir ? 288 : 0;
            var saveLevels;
            if (cfg) levels = cfg.levels;
            var sub = {
                pos: [-32 + off, levels.shift()],
                sprite: new Sprite("img/su.png", [0, 0], [32, 16], 0, [0], dir)
            };
            sub.dir = dir;
            sub.speed = subSpeed + mapLinear(sub.pos[1], 40, 200, 18, 0);
            if (dir) sub.speed *= -1;
            sub.score = rand(0, 5);
            if (cfg) sub.score = cfg.score;
            subs.push(sub);

            var score = {
                pos: [-99, 0],
                sprite: new Sprite("img/sup.png", [sub.score * 7, 0], [7, 5], 0, [0])
            };
            points.push(score);

            if (role == "sub" || demoMode) {
                var indicator = {
                    pos: sub.pos[1] + 8,
                    value: subsAvailable.shift()
                };
                indicators.push(indicator);
            }

            var config = {
                dir: dir,
                score: sub.score,
                levels: [sub.pos[1]].concat(levels)
            };
            if (role == "sub" && !cfg) {
                socket.emit("launchSub", config);
            }
        }

        if ((!isGameOver && role == "sub") || demoMode) timeout = setTimeout(launchSub.bind(this), rand(3500, 9000));
    }

    function drawText(x, y, txt, color, size) {
        var sz = 9;
        if (size) sz = size;
        ctx.font = sz + "px Lucida Console, Monaco, monospace";
        ctx.fillStyle = color || "red";
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.fillText(txt, x, y); 
    }
    
    function drawFilter() {
        var i = 0,
            width = 3,
            separation = width + 1,
            count = canvas.height  / separation;
        netCnt ++;
        if (netCnt > separation) netCnt = 0;

        ctx.fillStyle = 'rgba(200, 200, 0, 0.12)';
        ctx.beginPath();
        while (++i < count) {
            ctx.rect(0, (i-1) * separation + netCnt, canvas.width, width);
        }
        ctx.fill();
    }
    
    function drawSquare(g) {
        var pos = g[0];
        var size = g[1];
        var col = g[2];
        ctx.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + col[3] + ")";
        ctx.beginPath();
        ctx.rect(pos[0], pos[1], size[0], size[1], col);
        ctx.fill();
    }
    
    function receiveGlitch(gs) {
        if (gs.length) {
            var g = gs.pop();
            glitch = g[0];
            setTimeout(function() {
                receiveGlitch.call(this, gs);
            }, g[1]);
        } else {
            glitch = [];
        }
    }
    
    function drawGlitch() {
        for (var q=0; q<glitch.length; q++) {
            drawSquare(glitch[q]);
        }
    }
    
    function receiveRot(r, t) {
        rot = r;
        setTimeout(function() {
            rot = [0, 0, 0];
        }.bind(this), t);
    }

    /*
    function sendShipPosition() {
        if (netCnt++ == 1) {
            netCnt = 0;
            socket.emit("shipPosition", ship.pos[0]);
        }
    }
    */

    function receiveShipPosition(ev, pos) {
        switch (ev) {
            case "LU":
                movingLeft = false;
                break;
            case "LD":
                movingLeft = true;55
                break;
            case "RU":
                movingRight = false;
                break;
            case "RD":
                movingRight = true;
                break;
            default:
                movingLeft = movingRight = false;
        }
        ship.pos[0] = pos;
    }
    
    function receiveShipSunk(score) {
        if (!ship.isSinking) {
            sunkShip();
            scorePlayerSub += score;
        }
    }

    // Update game objects
    function update(dt) {
        gameTime += dt;

        if (isGameOver) return; 
        handleInput(dt);
        if (demoMode && !tutSeen) updateTuto();
        updateEntities(dt);
    }  
    
    function updateTuto() {
        switch (tutCnt) {
            case 1:
                tutoTxt1 = "Ship player may use LEFT/RIGHT arrows to move.";
                tutoTxt2 = "Press 'M' to toggle MUSIC on/off.";
                break;
            case 60:
                movingLeft = true;
                break;
            case 120:
                movingRight = true;
                movingLeft = false;
                break;
            case 180:
                movingRight = false;
                break;
            case 240:
                tutoTxt1 = "May use 'A' and 'D' keys too.";
                movingRight = true;
                break;
            case 300:
                movingRight = false;
                movingLeft = true;
                break;
            case 360:
                movingLeft = false;
                break;
            case 400:
                tutoTxt1 = "'Z' and 'X' keys launch depth charges.";
                break;
            case 490:
                launchCharge(-8);
                break;
            case 550:
                launchCharge(+44);
                break;
            case 610:
                launchCharge(+44);
                tutoTxt1 = "Or use 'M' and 'N' keys if you prefer.";
                break;
            case 800:
                tutoTxt1 = "Ship has " + numCharges + " charges, reloaded when exploded.";
                break;
            case 980:
                tutoTxt1 = "Each submarine scores differently.";
                tutoTxt2 = "";
                break;
            case 1100:
                tutoTxt1 = "";
                tutoTxt2 = "Submarine player does't control movement, but...";
                break;
            case 1280:
                tutoTxt2 = "may fire torpedoes from all available subs...";
                break;
            case 1460:
                tutoTxt2 = "by pressing numbers from 1 to 8.";
                break;
            case 1500:
                for (var i=0; i<3; i++) {
                    (function(i) {
                        setTimeout(function() {
                            if (subs[i]) {
                                var pos = subs[i].pos;
                                launchTorpedo([pos[0] + subs[i].sprite.size[0]/2, pos[1]]);
                            }
                        }.bind(this), i*750);
                    })(i);
                }
                break;
            case 1660:
                tutoTxt2 = "Deeper launched torpedoes score more points.";
                break;
            case 1890:
                tutoTxt1 = "There's a delay between each charge launch.";
                tutoTxt2 = "There's a delay between each torpedo launch.";
                break;
            case 2120:
                tutoTxt1 = "One more thing: Sub player may press 'SPACE'";
                tutoTxt2 = "to enter 'Silent running' mode.";
                break;
            case 2320:
                tutoTxt1 = "The subs remain invisible for a short time.";
                tutoTxt2 = "There's only 1 silent running per game.";
                silentCnt = 400;
                break;
            case 2720:
                tutoTxt1 = "When time ends, the best score wins.";
                tutoTxt2 = "";
                break;
            case 2900:
                tutoTxt1 = "Good luck, captain!";
                break;
            case 3200:
                tutoTxt1 = "";
                break;
        }
    }

    function handleInput(dt) {
        if ((!ship.isSinking && role == "sub") || demoMode) {
            if (movingLeft) ship.pos[0] -= shipSpeed * dt;
            if (movingRight) ship.pos[0] += shipSpeed * dt;
        }
        if (input.isDown("m") && !audioCtx.isChanging) {
            audioCtx.isChanging = true;
            if (audioCtx.isPlaying) {
                audioCtx.suspend();
                audioCtx.isPlaying = false;
            } else {
                audioCtx.resume();
                audioCtx.isPlaying = true;
            }
            setTimeout(function() {
                audioCtx.isChanging = false;
            }.bind(this), 500);
        }
        if (demoMode) return;

        if (!ship.isSinking && role == "ship") {
            var p = ship.pos[0];
            if (input.isDown("LEFT") || input.isDown("a")) {
                ship.pos[0] -= shipSpeed * dt;
                if (!movingLeft) socket.emit("controls", "LD", p);
                if (movingRight) socket.emit("controls", "RU", p);
                movingLeft = true;
                movingRight = false;
            } else if (input.isDown("RIGHT") || input.isDown("d")) {
                ship.pos[0] += shipSpeed * dt;
                if (!movingRight) socket.emit("controls", "RD", p);
                if (movingLeft) socket.emit("controls", "LU", p);
                movingRight = true;
                movingLeft = false;
            } else {
                if (movingLeft) socket.emit("controls", "LU", p);
                if (movingRight) socket.emit("controls", "RU", p);
                movingLeft = movingRight = false;
            }

            if ((input.isDown("z") || input.isDown("n")) && numCharges > charges.length && Date.now() - lastFireCharge > 750) {
                launchCharge(-8);
            }
            if ((input.isDown("x") || input.isDown("m")) && numCharges > charges.length && Date.now() - lastFireCharge > 750) {
                launchCharge(+44);
            }
        }

        if (role == "sub" && silentRunning>0 && input.isDown("SPACE")) {
            socket.emit("silent");
            silentCnt = 720;
            silentRunning--;
            aa.play("f");
        }

        for (var i=0; i<indicators.length; i++) {
            if (role == "sub" && numTorpedoes > torpedoes.length && Date.now() - lastFireTorpedo > 1350 && input.isDown(indicators[i].value.toString())) {
                if (subs[i]) {
                    var pos = subs[i].pos;
                    var updateSub = [i, subs[i].pos];
                    launchTorpedo([pos[0] + subs[i].sprite.size[0]/2, pos[1]], updateSub);
                }
            }
        }
    }

    function updateEntities(dt) {
        // Update the player sprite animation
        ship.sprite.update(dt);
        checkShipBounds();

        // Update subs
        for (i=0; i<subs.length; i++) {
            var s = subs[i];
            var ss = s.sprite;
            ss.update(dt);
            s.pos[0] += s.speed * dt;
            var p = points[i];
            p.pos[0] = s.pos[0] + ss.size[0]/2 - (ss.flip*7);
            p.pos[1] = s.pos[1] + ss.size[1]/2;
            p.sprite.update(dt);
            if (ss.done) {
                subs.splice(i, 1);
                points.splice(i, 1);
            }

            var killSub = false;
            if (ss.flip && s.pos[0]<-ss.size[0]) {
                killSub = true;
            } else if (s.pos[0]>256) {
                killSub = true;
            }
            if (killSub) {
                subs.splice(i, 1);
                points.splice(i, 1);
                if (role == "sub" || demoMode) subsAvailable.push(indicators.splice(i, 1)[0].value);
                levels.push(s.pos[1]);
            }
        }

        // Update all the charges
        for (var i=0; i<charges.length; i++) {
            var charge = charges[i];
            charge.pos[1] += chargeSpeed * dt;
            charge.sprite.update(dt);

            if (charge.pos[1] > 32 && !charge.onWater) {
                charge.onWater = true;
                charge.sprite.url = "img/sc.png";
            }

            var killCharge = false;
            killCharge = checkNearField(charge);
            if (charge.pos[1] >= 200) {
                killCharge = true;
            }

            if (killCharge) {
                charges.splice(i, 1);
                var explosion = {
                    pos: [charge.pos[0], charge.pos[1]],
                    sprite: new Sprite("img/sce.png", [0, 0], [4, 6], 4, [0, 1, 2, 3], null, "h", true)
                };
                chargeExplosions.push(explosion);
                aa.play("b");
            }
        }

        // Update all the chargeExplosions
        for (i=0; i<chargeExplosions.length; i++) {
            var e = chargeExplosions[i].sprite;
            if (e.done) chargeExplosions.splice(i, 1);
            e.update(dt);
        }

        // Update all the torpedoes
        for (i=0; i<torpedoes.length; i++) {
            var torp = torpedoes[i];
            torp.pos[1] -= torpedoSpeed * dt;
            torp.sprite.update(dt);

            if (torp.pos[1] <= 32) {
                torpedoes.splice(i, 1);
                if (!ship.isSinking && !shipImmune && !(torp.pos[0]+4<ship.pos[0] || torp.pos[0]>ship.pos[0]+40)) {
                    scorePlayerSub += torp.score;
                    sunkShip();
                    socket.emit("syncronizeSunk", torp.score);
                }
                var explosion = {
                    pos: [torp.pos[0], 20],
                    sprite: new Sprite("img/te.png", [0, 0], [8, 12], 4, [0, 1, 2, 0], null, "h", true)
                };
                torpedoExplosions.push(explosion);
                aa.play("c");
            }
        }

        // Update all the torpedoExplosions
        for (i=0; i<torpedoExplosions.length; i++) {
            var t = torpedoExplosions[i];
            var e = t.sprite;
            if (e.done) torpedoExplosions.splice(i, 1);
            e.update(dt);
        }
        
        // silent running
        if (silentCnt > 0) silentCnt--;
    }

    function updateTimer() {
        if (timeLeft-- <= 0) {
            timeLeft = 0;
            clearInterval(timeInterval);
            if (!demoMode) isGameOver = true;
        }
    }

    function checkNearField(c) {
        var subDestroyed = false;
        for (var i=0; i<subs.length; i++) {
            var s = subs[i];
            if (s.isSinking) continue;
            var sp = s.pos;
            var cp = c.pos;
            if (sp[0] > cp[0] + 4 || sp[0] + 32 < cp[0]) continue;
            if (sp[1] > cp[1] + 3 || sp[1] + 16 < cp[1]) continue;
            subDestroyed = true;
            destroySub(i);
            break;
        }
        return subDestroyed;
    }

    function checkShipBounds() {
        if (ship.pos[0] < 0) {
            ship.pos[0] = 0;
        } else if (ship.pos[0] > canvas.width - ship.sprite.size[0]) {
            ship.pos[0] = canvas.width - ship.sprite.size[0];
        }

        if (ship.pos[1] < 0) {
            ship.pos[1] = 0;
        } else if (ship.pos[1] > canvas.height - ship.sprite.size[1]) {
            ship.pos[1] = canvas.height - ship.sprite.size[1];
        }
    }

    function destroySub(i) {
        var s = subs[i];
        s.isSinking = true;
        var ss = s.sprite;
        ss.speed = 2;
        ss.frames = [0, 1, 2];
        ss.once = true;
        ss.reset();
        scorePlayerShip += subScores[s.score];
        var i = indicators.splice(i, 1)[0];
        if (i) subsAvailable.push(i.value);
        levels.push(s.pos[1]);
        bodyCount.push(0);
    }

    function sunkShip() {
        ship.isSinking = true;
        ship.sprite.frames = [0, 1, 2, 3];
        ship.sprite.once = true;
        ship.sprite.speed = 2;
        setTimeout(launchShip.bind(this), 2500);
        aa.play("a");
        bodyCount.push(1);
    }
    
    // Draw everything
    function render() {
        ctx.fillStyle = "#4487c9";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 32, canvas.width, 184);

        // render ship player
        var renderShip = false;
        if (shipImmune) {
            if (immuneCnt++ % 3 == 0) renderShip = true;
            if (immuneCnt > 150) {
                shipImmune = false;
                immuneCnt = 0;
            }
        } else {
            renderShip = true;
        }
        if (renderShip) {
            renderEntity(ship);
        }

        // print indicator lines
        for (var i=0; i < indicators.length; i++) {
            for (var q=0; q<28; q++) {
                drawText(-10 + indCnt + q*10, indicators[i].pos, "-", "rgba(255, 0, 0, 0.25)");
            }
        }
        if (indCnt++ > 10) indCnt = 0;

        renderEntities(charges);
        renderEntities(chargeExplosions);
        renderEntities(torpedoes);
        renderEntities(torpedoExplosions);
        var renderSubs = false;
        if (role == "ship" && silentCnt<=0 && !demoMode) renderSubs = true;
        if ((role == "sub" || demoMode) && (silentCnt % 6 == 0)) renderSubs = true;
        if (renderSubs) renderEntities(subs);
        renderEntities(points);

        // print available charges
        for (var i=0; i < numCharges - charges.length; i++) {
            ctx.drawImage(resources.get("img/scb.png"),
                    0, 6,
                    4, 3,
                    100 + (i*5), 4,
                    4, 3);
        }

        // print available torpedoes
        for (var i=0; i < numTorpedoes - torpedoes.length; i++) {
            ctx.drawImage(resources.get("img/sut.png"),
                    0, 0,
                    3, 3,
                    100 + (i*6), 204,
                    4, 3);
        }

        // print indicator texts
        for (var i=0; i < indicators.length; i++) {
            var ind = indicators[i];
            drawText(5, ind.pos, ind.value);
        }

        // print player scores
        drawText(30, 5, "TIME - " + timeLeft, "black");
        drawText(210, 5, playerShipName + " - " + scorePlayerShip, "black");
        drawText(210, 204, playerSubName + " - " + scorePlayerSub, "#4487c9");
        if (isGameOver) {
            var txt = scorePlayerShip > scorePlayerSub ? playerShipName + " WINS!" : scorePlayerShip == scorePlayerSub ? "DRAW!" : playerSubName + " WINS!";
            drawText(canvas.width/2, canvas.height/2, txt, "white");
            drawText(canvas.width/2, canvas.height/2 + 20, "Please reload (F5) to play again.", "white");
        }
        
        // print tutorial texts
        if (demoMode && tutCnt++ % 2 == 0) {
            drawText(128, 40, tutoTxt1, "yellow", 8);
            drawText(128, 150, tutoTxt2, "yellow", 8);
        }

        // render bodyCount
        for (i=0; i < bodyCount.length; i++) {
            ctx.drawImage(resources.get("img/i.png"),
                    0 + bodyCount[i]*14, 0,
                    14, 6,
                    i*14, 216,
                    14, 6);
        }

        // Draw glitch
        if (glitch.length) drawGlitch();
        
        // Draw retro arcade filter
        drawFilter();
        
        // Render to the main screen
        screenCtx.save();
        screenCtx.translate(256, 224);
        screenCtx.rotate(rot[0]);
        screenCtx.translate(-256, -224);
        screenCtx.drawImage(canvas, rot[1], rot[2], canvas.width, canvas.height, 0, 0, screen.width, screen.height);
        screenCtx.restore();
    }

    function renderEntity(entity) {
        ctx.save();
        ctx.translate(entity.pos[0], entity.pos[1]);
        if (entity.sprite.flip) {
            ctx.translate(entity.sprite.size[0], 0);
            ctx.scale(-1, 1);
        }
        entity.sprite.render(ctx);
        ctx.restore();
    }

    function renderEntities(list) {
        for (var i=0; i<list.length; i++) {
            renderEntity(list[i]);
        }
    }

    function rand(a, b) {
        return Math.floor(Math.random() * (b-a+1)) + a;
    }

    function mapLinear(x, a1, a2, b1, b2) {
        return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );
    }

    function snapToFloor(input, gap, start) {
        if (start === undefined) start = 0;
        if (gap === 0) return input;
        input -= start;
        input = gap * Math.floor(input / gap);
        return start + input;
    }

    function shuffleArr(array) {
        for (var i = array.length - 1; i > 0; i--)         {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
})();