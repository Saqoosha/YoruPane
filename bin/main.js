!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(a){"use strict";var b={};"undefined"==typeof c?"function"==typeof define&&"object"==typeof define.amd&&define.amd?(b.exports={},define(function(){return b.exports})):b.exports="undefined"!=typeof window?window:a:b.exports=c,function(a){if(!b)var b=1e-6;if(!c)var c="undefined"!=typeof Float32Array?Float32Array:Array;if(!d)var d=Math.random;var e={};e.setMatrixArrayType=function(a){c=a},"undefined"!=typeof a&&(a.glMatrix=e);var f=Math.PI/180;e.toRadian=function(a){return a*f};var g={};g.create=function(){var a=new c(2);return a[0]=0,a[1]=0,a},g.clone=function(a){var b=new c(2);return b[0]=a[0],b[1]=a[1],b},g.fromValues=function(a,b){var d=new c(2);return d[0]=a,d[1]=b,d},g.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a},g.set=function(a,b,c){return a[0]=b,a[1]=c,a},g.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a},g.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a},g.sub=g.subtract,g.multiply=function(a,b,c){return a[0]=b[0]*c[0],a[1]=b[1]*c[1],a},g.mul=g.multiply,g.divide=function(a,b,c){return a[0]=b[0]/c[0],a[1]=b[1]/c[1],a},g.div=g.divide,g.min=function(a,b,c){return a[0]=Math.min(b[0],c[0]),a[1]=Math.min(b[1],c[1]),a},g.max=function(a,b,c){return a[0]=Math.max(b[0],c[0]),a[1]=Math.max(b[1],c[1]),a},g.scale=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a},g.scaleAndAdd=function(a,b,c,d){return a[0]=b[0]+c[0]*d,a[1]=b[1]+c[1]*d,a},g.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},g.dist=g.distance,g.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d},g.sqrDist=g.squaredDistance,g.length=function(a){var b=a[0],c=a[1];return Math.sqrt(b*b+c*c)},g.len=g.length,g.squaredLength=function(a){var b=a[0],c=a[1];return b*b+c*c},g.sqrLen=g.squaredLength,g.negate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a},g.normalize=function(a,b){var c=b[0],d=b[1],e=c*c+d*d;return e>0&&(e=1/Math.sqrt(e),a[0]=b[0]*e,a[1]=b[1]*e),a},g.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]},g.cross=function(a,b,c){var d=b[0]*c[1]-b[1]*c[0];return a[0]=a[1]=0,a[2]=d,a},g.lerp=function(a,b,c,d){var e=b[0],f=b[1];return a[0]=e+d*(c[0]-e),a[1]=f+d*(c[1]-f),a},g.random=function(a,b){b=b||1;var c=2*d()*Math.PI;return a[0]=Math.cos(c)*b,a[1]=Math.sin(c)*b,a},g.transformMat2=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[2]*e,a[1]=c[1]*d+c[3]*e,a},g.transformMat2d=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[2]*e+c[4],a[1]=c[1]*d+c[3]*e+c[5],a},g.transformMat3=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[3]*e+c[6],a[1]=c[1]*d+c[4]*e+c[7],a},g.transformMat4=function(a,b,c){var d=b[0],e=b[1];return a[0]=c[0]*d+c[4]*e+c[12],a[1]=c[1]*d+c[5]*e+c[13],a},g.forEach=function(){var a=g.create();return function(b,c,d,e,f,g){var h,i;for(c||(c=2),d||(d=0),i=e?Math.min(e*c+d,b.length):b.length,h=d;i>h;h+=c)a[0]=b[h],a[1]=b[h+1],f(a,a,g),b[h]=a[0],b[h+1]=a[1];return b}}(),g.str=function(a){return"vec2("+a[0]+", "+a[1]+")"},"undefined"!=typeof a&&(a.vec2=g);var h={};h.create=function(){var a=new c(3);return a[0]=0,a[1]=0,a[2]=0,a},h.clone=function(a){var b=new c(3);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b},h.fromValues=function(a,b,d){var e=new c(3);return e[0]=a,e[1]=b,e[2]=d,e},h.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a},h.set=function(a,b,c,d){return a[0]=b,a[1]=c,a[2]=d,a},h.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a[2]=b[2]+c[2],a},h.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a[2]=b[2]-c[2],a},h.sub=h.subtract,h.multiply=function(a,b,c){return a[0]=b[0]*c[0],a[1]=b[1]*c[1],a[2]=b[2]*c[2],a},h.mul=h.multiply,h.divide=function(a,b,c){return a[0]=b[0]/c[0],a[1]=b[1]/c[1],a[2]=b[2]/c[2],a},h.div=h.divide,h.min=function(a,b,c){return a[0]=Math.min(b[0],c[0]),a[1]=Math.min(b[1],c[1]),a[2]=Math.min(b[2],c[2]),a},h.max=function(a,b,c){return a[0]=Math.max(b[0],c[0]),a[1]=Math.max(b[1],c[1]),a[2]=Math.max(b[2],c[2]),a},h.scale=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a[2]=b[2]*c,a},h.scaleAndAdd=function(a,b,c,d){return a[0]=b[0]+c[0]*d,a[1]=b[1]+c[1]*d,a[2]=b[2]+c[2]*d,a},h.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return Math.sqrt(c*c+d*d+e*e)},h.dist=h.distance,h.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2];return c*c+d*d+e*e},h.sqrDist=h.squaredDistance,h.length=function(a){var b=a[0],c=a[1],d=a[2];return Math.sqrt(b*b+c*c+d*d)},h.len=h.length,h.squaredLength=function(a){var b=a[0],c=a[1],d=a[2];return b*b+c*c+d*d},h.sqrLen=h.squaredLength,h.negate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a[2]=-b[2],a},h.normalize=function(a,b){var c=b[0],d=b[1],e=b[2],f=c*c+d*d+e*e;return f>0&&(f=1/Math.sqrt(f),a[0]=b[0]*f,a[1]=b[1]*f,a[2]=b[2]*f),a},h.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},h.cross=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=c[0],h=c[1],i=c[2];return a[0]=e*i-f*h,a[1]=f*g-d*i,a[2]=d*h-e*g,a},h.lerp=function(a,b,c,d){var e=b[0],f=b[1],g=b[2];return a[0]=e+d*(c[0]-e),a[1]=f+d*(c[1]-f),a[2]=g+d*(c[2]-g),a},h.random=function(a,b){b=b||1;var c=2*d()*Math.PI,e=2*d()-1,f=Math.sqrt(1-e*e)*b;return a[0]=Math.cos(c)*f,a[1]=Math.sin(c)*f,a[2]=e*b,a},h.transformMat4=function(a,b,c){var d=b[0],e=b[1],f=b[2];return a[0]=c[0]*d+c[4]*e+c[8]*f+c[12],a[1]=c[1]*d+c[5]*e+c[9]*f+c[13],a[2]=c[2]*d+c[6]*e+c[10]*f+c[14],a},h.transformMat3=function(a,b,c){var d=b[0],e=b[1],f=b[2];return a[0]=d*c[0]+e*c[3]+f*c[6],a[1]=d*c[1]+e*c[4]+f*c[7],a[2]=d*c[2]+e*c[5]+f*c[8],a},h.transformQuat=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=c[0],h=c[1],i=c[2],j=c[3],k=j*d+h*f-i*e,l=j*e+i*d-g*f,m=j*f+g*e-h*d,n=-g*d-h*e-i*f;return a[0]=k*j+n*-g+l*-i-m*-h,a[1]=l*j+n*-h+m*-g-k*-i,a[2]=m*j+n*-i+k*-h-l*-g,a},h.rotateX=function(a,b,c,d){var e=[],f=[];return e[0]=b[0]-c[0],e[1]=b[1]-c[1],e[2]=b[2]-c[2],f[0]=e[0],f[1]=e[1]*Math.cos(d)-e[2]*Math.sin(d),f[2]=e[1]*Math.sin(d)+e[2]*Math.cos(d),a[0]=f[0]+c[0],a[1]=f[1]+c[1],a[2]=f[2]+c[2],a},h.rotateY=function(a,b,c,d){var e=[],f=[];return e[0]=b[0]-c[0],e[1]=b[1]-c[1],e[2]=b[2]-c[2],f[0]=e[2]*Math.sin(d)+e[0]*Math.cos(d),f[1]=e[1],f[2]=e[2]*Math.cos(d)-e[0]*Math.sin(d),a[0]=f[0]+c[0],a[1]=f[1]+c[1],a[2]=f[2]+c[2],a},h.rotateZ=function(a,b,c,d){var e=[],f=[];return e[0]=b[0]-c[0],e[1]=b[1]-c[1],e[2]=b[2]-c[2],f[0]=e[0]*Math.cos(d)-e[1]*Math.sin(d),f[1]=e[0]*Math.sin(d)+e[1]*Math.cos(d),f[2]=e[2],a[0]=f[0]+c[0],a[1]=f[1]+c[1],a[2]=f[2]+c[2],a},h.forEach=function(){var a=h.create();return function(b,c,d,e,f,g){var h,i;for(c||(c=3),d||(d=0),i=e?Math.min(e*c+d,b.length):b.length,h=d;i>h;h+=c)a[0]=b[h],a[1]=b[h+1],a[2]=b[h+2],f(a,a,g),b[h]=a[0],b[h+1]=a[1],b[h+2]=a[2];return b}}(),h.str=function(a){return"vec3("+a[0]+", "+a[1]+", "+a[2]+")"},"undefined"!=typeof a&&(a.vec3=h);var i={};i.create=function(){var a=new c(4);return a[0]=0,a[1]=0,a[2]=0,a[3]=0,a},i.clone=function(a){var b=new c(4);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b},i.fromValues=function(a,b,d,e){var f=new c(4);return f[0]=a,f[1]=b,f[2]=d,f[3]=e,f},i.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a},i.set=function(a,b,c,d,e){return a[0]=b,a[1]=c,a[2]=d,a[3]=e,a},i.add=function(a,b,c){return a[0]=b[0]+c[0],a[1]=b[1]+c[1],a[2]=b[2]+c[2],a[3]=b[3]+c[3],a},i.subtract=function(a,b,c){return a[0]=b[0]-c[0],a[1]=b[1]-c[1],a[2]=b[2]-c[2],a[3]=b[3]-c[3],a},i.sub=i.subtract,i.multiply=function(a,b,c){return a[0]=b[0]*c[0],a[1]=b[1]*c[1],a[2]=b[2]*c[2],a[3]=b[3]*c[3],a},i.mul=i.multiply,i.divide=function(a,b,c){return a[0]=b[0]/c[0],a[1]=b[1]/c[1],a[2]=b[2]/c[2],a[3]=b[3]/c[3],a},i.div=i.divide,i.min=function(a,b,c){return a[0]=Math.min(b[0],c[0]),a[1]=Math.min(b[1],c[1]),a[2]=Math.min(b[2],c[2]),a[3]=Math.min(b[3],c[3]),a},i.max=function(a,b,c){return a[0]=Math.max(b[0],c[0]),a[1]=Math.max(b[1],c[1]),a[2]=Math.max(b[2],c[2]),a[3]=Math.max(b[3],c[3]),a},i.scale=function(a,b,c){return a[0]=b[0]*c,a[1]=b[1]*c,a[2]=b[2]*c,a[3]=b[3]*c,a},i.scaleAndAdd=function(a,b,c,d){return a[0]=b[0]+c[0]*d,a[1]=b[1]+c[1]*d,a[2]=b[2]+c[2]*d,a[3]=b[3]+c[3]*d,a},i.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2],f=b[3]-a[3];return Math.sqrt(c*c+d*d+e*e+f*f)},i.dist=i.distance,i.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],e=b[2]-a[2],f=b[3]-a[3];return c*c+d*d+e*e+f*f},i.sqrDist=i.squaredDistance,i.length=function(a){var b=a[0],c=a[1],d=a[2],e=a[3];return Math.sqrt(b*b+c*c+d*d+e*e)},i.len=i.length,i.squaredLength=function(a){var b=a[0],c=a[1],d=a[2],e=a[3];return b*b+c*c+d*d+e*e},i.sqrLen=i.squaredLength,i.negate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a[2]=-b[2],a[3]=-b[3],a},i.normalize=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=c*c+d*d+e*e+f*f;return g>0&&(g=1/Math.sqrt(g),a[0]=b[0]*g,a[1]=b[1]*g,a[2]=b[2]*g,a[3]=b[3]*g),a},i.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]},i.lerp=function(a,b,c,d){var e=b[0],f=b[1],g=b[2],h=b[3];return a[0]=e+d*(c[0]-e),a[1]=f+d*(c[1]-f),a[2]=g+d*(c[2]-g),a[3]=h+d*(c[3]-h),a},i.random=function(a,b){return b=b||1,a[0]=d(),a[1]=d(),a[2]=d(),a[3]=d(),i.normalize(a,a),i.scale(a,a,b),a},i.transformMat4=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3];return a[0]=c[0]*d+c[4]*e+c[8]*f+c[12]*g,a[1]=c[1]*d+c[5]*e+c[9]*f+c[13]*g,a[2]=c[2]*d+c[6]*e+c[10]*f+c[14]*g,a[3]=c[3]*d+c[7]*e+c[11]*f+c[15]*g,a},i.transformQuat=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=c[0],h=c[1],i=c[2],j=c[3],k=j*d+h*f-i*e,l=j*e+i*d-g*f,m=j*f+g*e-h*d,n=-g*d-h*e-i*f;return a[0]=k*j+n*-g+l*-i-m*-h,a[1]=l*j+n*-h+m*-g-k*-i,a[2]=m*j+n*-i+k*-h-l*-g,a},i.forEach=function(){var a=i.create();return function(b,c,d,e,f,g){var h,i;for(c||(c=4),d||(d=0),i=e?Math.min(e*c+d,b.length):b.length,h=d;i>h;h+=c)a[0]=b[h],a[1]=b[h+1],a[2]=b[h+2],a[3]=b[h+3],f(a,a,g),b[h]=a[0],b[h+1]=a[1],b[h+2]=a[2],b[h+3]=a[3];return b}}(),i.str=function(a){return"vec4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},"undefined"!=typeof a&&(a.vec4=i);var j={};j.create=function(){var a=new c(4);return a[0]=1,a[1]=0,a[2]=0,a[3]=1,a},j.clone=function(a){var b=new c(4);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b},j.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a},j.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=1,a},j.transpose=function(a,b){if(a===b){var c=b[1];a[1]=b[2],a[2]=c}else a[0]=b[0],a[1]=b[2],a[2]=b[1],a[3]=b[3];return a},j.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=c*f-e*d;return g?(g=1/g,a[0]=f*g,a[1]=-d*g,a[2]=-e*g,a[3]=c*g,a):null},j.adjoint=function(a,b){var c=b[0];return a[0]=b[3],a[1]=-b[1],a[2]=-b[2],a[3]=c,a},j.determinant=function(a){return a[0]*a[3]-a[2]*a[1]},j.multiply=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=c[0],i=c[1],j=c[2],k=c[3];return a[0]=d*h+f*i,a[1]=e*h+g*i,a[2]=d*j+f*k,a[3]=e*j+g*k,a},j.mul=j.multiply,j.rotate=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=Math.sin(c),i=Math.cos(c);return a[0]=d*i+f*h,a[1]=e*i+g*h,a[2]=d*-h+f*i,a[3]=e*-h+g*i,a},j.scale=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=c[0],i=c[1];return a[0]=d*h,a[1]=e*h,a[2]=f*i,a[3]=g*i,a},j.str=function(a){return"mat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},j.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2))},j.LDU=function(a,b,c,d){return a[2]=d[2]/d[0],c[0]=d[0],c[1]=d[1],c[3]=d[3]-a[2]*c[1],[a,b,c]},"undefined"!=typeof a&&(a.mat2=j);var k={};k.create=function(){var a=new c(6);return a[0]=1,a[1]=0,a[2]=0,a[3]=1,a[4]=0,a[5]=0,a},k.clone=function(a){var b=new c(6);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b},k.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a},k.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=1,a[4]=0,a[5]=0,a},k.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=c*f-d*e;return i?(i=1/i,a[0]=f*i,a[1]=-d*i,a[2]=-e*i,a[3]=c*i,a[4]=(e*h-f*g)*i,a[5]=(d*g-c*h)*i,a):null},k.determinant=function(a){return a[0]*a[3]-a[1]*a[2]},k.multiply=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=c[0],k=c[1],l=c[2],m=c[3],n=c[4],o=c[5];return a[0]=d*j+f*k,a[1]=e*j+g*k,a[2]=d*l+f*m,a[3]=e*l+g*m,a[4]=d*n+f*o+h,a[5]=e*n+g*o+i,a},k.mul=k.multiply,k.rotate=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=Math.sin(c),k=Math.cos(c);return a[0]=d*k+f*j,a[1]=e*k+g*j,a[2]=d*-j+f*k,a[3]=e*-j+g*k,a[4]=h,a[5]=i,a},k.scale=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=c[0],k=c[1];return a[0]=d*j,a[1]=e*j,a[2]=f*k,a[3]=g*k,a[4]=h,a[5]=i,a},k.translate=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=c[0],k=c[1];return a[0]=d,a[1]=e,a[2]=f,a[3]=g,a[4]=d*j+f*k+h,a[5]=e*j+g*k+i,a},k.str=function(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"},k.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+1)},"undefined"!=typeof a&&(a.mat2d=k);var l={};l.create=function(){var a=new c(9);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},l.fromMat4=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[4],a[4]=b[5],a[5]=b[6],a[6]=b[8],a[7]=b[9],a[8]=b[10],a},l.clone=function(a){var b=new c(9);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b},l.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],a},l.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a},l.transpose=function(a,b){if(a===b){var c=b[1],d=b[2],e=b[5];a[1]=b[3],a[2]=b[6],a[3]=c,a[5]=b[7],a[6]=d,a[7]=e}else a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8];return a},l.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],k=b[8],l=k*g-h*j,m=-k*f+h*i,n=j*f-g*i,o=c*l+d*m+e*n;return o?(o=1/o,a[0]=l*o,a[1]=(-k*d+e*j)*o,a[2]=(h*d-e*g)*o,a[3]=m*o,a[4]=(k*c-e*i)*o,a[5]=(-h*c+e*f)*o,a[6]=n*o,a[7]=(-j*c+d*i)*o,a[8]=(g*c-d*f)*o,a):null},l.adjoint=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],k=b[8];return a[0]=g*k-h*j,a[1]=e*j-d*k,a[2]=d*h-e*g,a[3]=h*i-f*k,a[4]=c*k-e*i,a[5]=e*f-c*h,a[6]=f*j-g*i,a[7]=d*i-c*j,a[8]=c*g-d*f,a},l.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],j=a[8];return b*(j*f-g*i)+c*(-j*e+g*h)+d*(i*e-f*h)},l.multiply=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=b[6],k=b[7],l=b[8],m=c[0],n=c[1],o=c[2],p=c[3],q=c[4],r=c[5],s=c[6],t=c[7],u=c[8];return a[0]=m*d+n*g+o*j,a[1]=m*e+n*h+o*k,a[2]=m*f+n*i+o*l,a[3]=p*d+q*g+r*j,a[4]=p*e+q*h+r*k,a[5]=p*f+q*i+r*l,a[6]=s*d+t*g+u*j,a[7]=s*e+t*h+u*k,a[8]=s*f+t*i+u*l,a},l.mul=l.multiply,l.translate=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=b[6],k=b[7],l=b[8],m=c[0],n=c[1];return a[0]=d,a[1]=e,a[2]=f,a[3]=g,a[4]=h,a[5]=i,a[6]=m*d+n*g+j,a[7]=m*e+n*h+k,a[8]=m*f+n*i+l,a},l.rotate=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=b[6],k=b[7],l=b[8],m=Math.sin(c),n=Math.cos(c);return a[0]=n*d+m*g,a[1]=n*e+m*h,a[2]=n*f+m*i,a[3]=n*g-m*d,a[4]=n*h-m*e,a[5]=n*i-m*f,a[6]=j,a[7]=k,a[8]=l,a},l.scale=function(a,b,c){var d=c[0],e=c[1];return a[0]=d*b[0],a[1]=d*b[1],a[2]=d*b[2],a[3]=e*b[3],a[4]=e*b[4],a[5]=e*b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],a},l.fromMat2d=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=0,a[3]=b[2],a[4]=b[3],a[5]=0,a[6]=b[4],a[7]=b[5],a[8]=1,a},l.fromQuat=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=c+c,h=d+d,i=e+e,j=c*g,k=d*g,l=d*h,m=e*g,n=e*h,o=e*i,p=f*g,q=f*h,r=f*i;return a[0]=1-l-o,a[3]=k-r,a[6]=m+q,a[1]=k+r,a[4]=1-j-o,a[7]=n-p,a[2]=m-q,a[5]=n+p,a[8]=1-j-l,a},l.normalFromMat4=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],k=b[8],l=b[9],m=b[10],n=b[11],o=b[12],p=b[13],q=b[14],r=b[15],s=c*h-d*g,t=c*i-e*g,u=c*j-f*g,v=d*i-e*h,w=d*j-f*h,x=e*j-f*i,y=k*p-l*o,z=k*q-m*o,A=k*r-n*o,B=l*q-m*p,C=l*r-n*p,D=m*r-n*q,E=s*D-t*C+u*B+v*A-w*z+x*y;return E?(E=1/E,a[0]=(h*D-i*C+j*B)*E,a[1]=(i*A-g*D-j*z)*E,a[2]=(g*C-h*A+j*y)*E,a[3]=(e*C-d*D-f*B)*E,a[4]=(c*D-e*A+f*z)*E,a[5]=(d*A-c*C-f*y)*E,a[6]=(p*x-q*w+r*v)*E,a[7]=(q*u-o*x-r*t)*E,a[8]=(o*w-p*u+r*s)*E,a):null},l.str=function(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+")"},l.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2))},"undefined"!=typeof a&&(a.mat3=l);var m={};m.create=function(){var a=new c(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},m.clone=function(a){var b=new c(16);return b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15],b},m.copy=function(a,b){return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15],a},m.identity=function(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},m.transpose=function(a,b){if(a===b){var c=b[1],d=b[2],e=b[3],f=b[6],g=b[7],h=b[11];a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=c,a[6]=b[9],a[7]=b[13],a[8]=d,a[9]=f,a[11]=b[14],a[12]=e,a[13]=g,a[14]=h}else a[0]=b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a},m.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],k=b[8],l=b[9],m=b[10],n=b[11],o=b[12],p=b[13],q=b[14],r=b[15],s=c*h-d*g,t=c*i-e*g,u=c*j-f*g,v=d*i-e*h,w=d*j-f*h,x=e*j-f*i,y=k*p-l*o,z=k*q-m*o,A=k*r-n*o,B=l*q-m*p,C=l*r-n*p,D=m*r-n*q,E=s*D-t*C+u*B+v*A-w*z+x*y;return E?(E=1/E,a[0]=(h*D-i*C+j*B)*E,a[1]=(e*C-d*D-f*B)*E,a[2]=(p*x-q*w+r*v)*E,a[3]=(m*w-l*x-n*v)*E,a[4]=(i*A-g*D-j*z)*E,a[5]=(c*D-e*A+f*z)*E,a[6]=(q*u-o*x-r*t)*E,a[7]=(k*x-m*u+n*t)*E,a[8]=(g*C-h*A+j*y)*E,a[9]=(d*A-c*C-f*y)*E,a[10]=(o*w-p*u+r*s)*E,a[11]=(l*u-k*w-n*s)*E,a[12]=(h*z-g*B-i*y)*E,a[13]=(c*B-d*z+e*y)*E,a[14]=(p*t-o*v-q*s)*E,a[15]=(k*v-l*t+m*s)*E,a):null},m.adjoint=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],k=b[8],l=b[9],m=b[10],n=b[11],o=b[12],p=b[13],q=b[14],r=b[15];return a[0]=h*(m*r-n*q)-l*(i*r-j*q)+p*(i*n-j*m),a[1]=-(d*(m*r-n*q)-l*(e*r-f*q)+p*(e*n-f*m)),a[2]=d*(i*r-j*q)-h*(e*r-f*q)+p*(e*j-f*i),a[3]=-(d*(i*n-j*m)-h*(e*n-f*m)+l*(e*j-f*i)),a[4]=-(g*(m*r-n*q)-k*(i*r-j*q)+o*(i*n-j*m)),a[5]=c*(m*r-n*q)-k*(e*r-f*q)+o*(e*n-f*m),a[6]=-(c*(i*r-j*q)-g*(e*r-f*q)+o*(e*j-f*i)),a[7]=c*(i*n-j*m)-g*(e*n-f*m)+k*(e*j-f*i),a[8]=g*(l*r-n*p)-k*(h*r-j*p)+o*(h*n-j*l),a[9]=-(c*(l*r-n*p)-k*(d*r-f*p)+o*(d*n-f*l)),a[10]=c*(h*r-j*p)-g*(d*r-f*p)+o*(d*j-f*h),a[11]=-(c*(h*n-j*l)-g*(d*n-f*l)+k*(d*j-f*h)),a[12]=-(g*(l*q-m*p)-k*(h*q-i*p)+o*(h*m-i*l)),a[13]=c*(l*q-m*p)-k*(d*q-e*p)+o*(d*m-e*l),a[14]=-(c*(h*q-i*p)-g*(d*q-e*p)+o*(d*i-e*h)),a[15]=c*(h*m-i*l)-g*(d*m-e*l)+k*(d*i-e*h),a},m.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],m=a[11],n=a[12],o=a[13],p=a[14],q=a[15],r=b*g-c*f,s=b*h-d*f,t=b*i-e*f,u=c*h-d*g,v=c*i-e*g,w=d*i-e*h,x=j*o-k*n,y=j*p-l*n,z=j*q-m*n,A=k*p-l*o,B=k*q-m*o,C=l*q-m*p;return r*C-s*B+t*A+u*z-v*y+w*x},m.multiply=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=b[6],k=b[7],l=b[8],m=b[9],n=b[10],o=b[11],p=b[12],q=b[13],r=b[14],s=b[15],t=c[0],u=c[1],v=c[2],w=c[3];return a[0]=t*d+u*h+v*l+w*p,a[1]=t*e+u*i+v*m+w*q,a[2]=t*f+u*j+v*n+w*r,a[3]=t*g+u*k+v*o+w*s,t=c[4],u=c[5],v=c[6],w=c[7],a[4]=t*d+u*h+v*l+w*p,a[5]=t*e+u*i+v*m+w*q,a[6]=t*f+u*j+v*n+w*r,a[7]=t*g+u*k+v*o+w*s,t=c[8],u=c[9],v=c[10],w=c[11],a[8]=t*d+u*h+v*l+w*p,a[9]=t*e+u*i+v*m+w*q,a[10]=t*f+u*j+v*n+w*r,a[11]=t*g+u*k+v*o+w*s,t=c[12],u=c[13],v=c[14],w=c[15],a[12]=t*d+u*h+v*l+w*p,a[13]=t*e+u*i+v*m+w*q,a[14]=t*f+u*j+v*n+w*r,a[15]=t*g+u*k+v*o+w*s,a},m.mul=m.multiply,m.translate=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p=c[0],q=c[1],r=c[2];return b===a?(a[12]=b[0]*p+b[4]*q+b[8]*r+b[12],a[13]=b[1]*p+b[5]*q+b[9]*r+b[13],a[14]=b[2]*p+b[6]*q+b[10]*r+b[14],a[15]=b[3]*p+b[7]*q+b[11]*r+b[15]):(d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],i=b[5],j=b[6],k=b[7],l=b[8],m=b[9],n=b[10],o=b[11],a[0]=d,a[1]=e,a[2]=f,a[3]=g,a[4]=h,a[5]=i,a[6]=j,a[7]=k,a[8]=l,a[9]=m,a[10]=n,a[11]=o,a[12]=d*p+h*q+l*r+b[12],a[13]=e*p+i*q+m*r+b[13],a[14]=f*p+j*q+n*r+b[14],a[15]=g*p+k*q+o*r+b[15]),a},m.scale=function(a,b,c){var d=c[0],e=c[1],f=c[2];return a[0]=b[0]*d,a[1]=b[1]*d,a[2]=b[2]*d,a[3]=b[3]*d,a[4]=b[4]*e,a[5]=b[5]*e,a[6]=b[6]*e,a[7]=b[7]*e,a[8]=b[8]*f,a[9]=b[9]*f,a[10]=b[10]*f,a[11]=b[11]*f,a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15],a},m.rotate=function(a,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D=e[0],E=e[1],F=e[2],G=Math.sqrt(D*D+E*E+F*F);return Math.abs(G)<b?null:(G=1/G,D*=G,E*=G,F*=G,f=Math.sin(d),g=Math.cos(d),h=1-g,i=c[0],j=c[1],k=c[2],l=c[3],m=c[4],n=c[5],o=c[6],p=c[7],q=c[8],r=c[9],s=c[10],t=c[11],u=D*D*h+g,v=E*D*h+F*f,w=F*D*h-E*f,x=D*E*h-F*f,y=E*E*h+g,z=F*E*h+D*f,A=D*F*h+E*f,B=E*F*h-D*f,C=F*F*h+g,a[0]=i*u+m*v+q*w,a[1]=j*u+n*v+r*w,a[2]=k*u+o*v+s*w,a[3]=l*u+p*v+t*w,a[4]=i*x+m*y+q*z,a[5]=j*x+n*y+r*z,a[6]=k*x+o*y+s*z,a[7]=l*x+p*y+t*z,a[8]=i*A+m*B+q*C,a[9]=j*A+n*B+r*C,a[10]=k*A+o*B+s*C,a[11]=l*A+p*B+t*C,c!==a&&(a[12]=c[12],a[13]=c[13],a[14]=c[14],a[15]=c[15]),a)},m.rotateX=function(a,b,c){var d=Math.sin(c),e=Math.cos(c),f=b[4],g=b[5],h=b[6],i=b[7],j=b[8],k=b[9],l=b[10],m=b[11];return b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]),a[4]=f*e+j*d,a[5]=g*e+k*d,a[6]=h*e+l*d,a[7]=i*e+m*d,a[8]=j*e-f*d,a[9]=k*e-g*d,a[10]=l*e-h*d,a[11]=m*e-i*d,a},m.rotateY=function(a,b,c){var d=Math.sin(c),e=Math.cos(c),f=b[0],g=b[1],h=b[2],i=b[3],j=b[8],k=b[9],l=b[10],m=b[11];return b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]),a[0]=f*e-j*d,a[1]=g*e-k*d,a[2]=h*e-l*d,a[3]=i*e-m*d,a[8]=f*d+j*e,a[9]=g*d+k*e,a[10]=h*d+l*e,a[11]=i*d+m*e,a},m.rotateZ=function(a,b,c){var d=Math.sin(c),e=Math.cos(c),f=b[0],g=b[1],h=b[2],i=b[3],j=b[4],k=b[5],l=b[6],m=b[7];return b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]),a[0]=f*e+j*d,a[1]=g*e+k*d,a[2]=h*e+l*d,a[3]=i*e+m*d,a[4]=j*e-f*d,a[5]=k*e-g*d,a[6]=l*e-h*d,a[7]=m*e-i*d,a},m.fromRotationTranslation=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=d+d,i=e+e,j=f+f,k=d*h,l=d*i,m=d*j,n=e*i,o=e*j,p=f*j,q=g*h,r=g*i,s=g*j;return a[0]=1-(n+p),a[1]=l+s,a[2]=m-r,a[3]=0,a[4]=l-s,a[5]=1-(k+p),a[6]=o+q,a[7]=0,a[8]=m+r,a[9]=o-q,a[10]=1-(k+n),a[11]=0,a[12]=c[0],a[13]=c[1],a[14]=c[2],a[15]=1,a},m.fromQuat=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=c+c,h=d+d,i=e+e,j=c*g,k=d*g,l=d*h,m=e*g,n=e*h,o=e*i,p=f*g,q=f*h,r=f*i;return a[0]=1-l-o,a[1]=k+r,a[2]=m-q,a[3]=0,a[4]=k-r,a[5]=1-j-o,a[6]=n+p,a[7]=0,a[8]=m+q,a[9]=n-p,a[10]=1-j-l,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a},m.frustum=function(a,b,c,d,e,f,g){var h=1/(c-b),i=1/(e-d),j=1/(f-g);return a[0]=2*f*h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2*f*i,a[6]=0,a[7]=0,a[8]=(c+b)*h,a[9]=(e+d)*i,a[10]=(g+f)*j,a[11]=-1,a[12]=0,a[13]=0,a[14]=g*f*2*j,a[15]=0,a},m.perspective=function(a,b,c,d,e){var f=1/Math.tan(b/2),g=1/(d-e);return a[0]=f/c,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=f,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=(e+d)*g,a[11]=-1,a[12]=0,a[13]=0,a[14]=2*e*d*g,a[15]=0,a},m.ortho=function(a,b,c,d,e,f,g){var h=1/(b-c),i=1/(d-e),j=1/(f-g);return a[0]=-2*h,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*i,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*j,a[11]=0,a[12]=(b+c)*h,a[13]=(e+d)*i,a[14]=(g+f)*j,a[15]=1,a},m.lookAt=function(a,c,d,e){var f,g,h,i,j,k,l,n,o,p,q=c[0],r=c[1],s=c[2],t=e[0],u=e[1],v=e[2],w=d[0],x=d[1],y=d[2];return Math.abs(q-w)<b&&Math.abs(r-x)<b&&Math.abs(s-y)<b?m.identity(a):(l=q-w,n=r-x,o=s-y,p=1/Math.sqrt(l*l+n*n+o*o),l*=p,n*=p,o*=p,f=u*o-v*n,g=v*l-t*o,h=t*n-u*l,p=Math.sqrt(f*f+g*g+h*h),p?(p=1/p,f*=p,g*=p,h*=p):(f=0,g=0,h=0),i=n*h-o*g,j=o*f-l*h,k=l*g-n*f,p=Math.sqrt(i*i+j*j+k*k),p?(p=1/p,i*=p,j*=p,k*=p):(i=0,j=0,k=0),a[0]=f,a[1]=i,a[2]=l,a[3]=0,a[4]=g,a[5]=j,a[6]=n,a[7]=0,a[8]=h,a[9]=k,a[10]=o,a[11]=0,a[12]=-(f*q+g*r+h*s),a[13]=-(i*q+j*r+k*s),a[14]=-(l*q+n*r+o*s),a[15]=1,a)},m.str=function(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"},m.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],2))},"undefined"!=typeof a&&(a.mat4=m);var n={};n.create=function(){var a=new c(4);return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a},n.rotationTo=function(){var a=h.create(),b=h.fromValues(1,0,0),c=h.fromValues(0,1,0);return function(d,e,f){var g=h.dot(e,f);return-.999999>g?(h.cross(a,b,e),h.length(a)<1e-6&&h.cross(a,c,e),h.normalize(a,a),n.setAxisAngle(d,a,Math.PI),d):g>.999999?(d[0]=0,d[1]=0,d[2]=0,d[3]=1,d):(h.cross(a,e,f),d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=1+g,n.normalize(d,d))}}(),n.setAxes=function(){var a=l.create();return function(b,c,d,e){return a[0]=d[0],a[3]=d[1],a[6]=d[2],a[1]=e[0],a[4]=e[1],a[7]=e[2],a[2]=-c[0],a[5]=-c[1],a[8]=-c[2],n.normalize(b,n.fromMat3(b,a))}}(),n.clone=i.clone,n.fromValues=i.fromValues,n.copy=i.copy,n.set=i.set,n.identity=function(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a},n.setAxisAngle=function(a,b,c){c=.5*c;var d=Math.sin(c);return a[0]=d*b[0],a[1]=d*b[1],a[2]=d*b[2],a[3]=Math.cos(c),a},n.add=i.add,n.multiply=function(a,b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=c[0],i=c[1],j=c[2],k=c[3];return a[0]=d*k+g*h+e*j-f*i,a[1]=e*k+g*i+f*h-d*j,a[2]=f*k+g*j+d*i-e*h,a[3]=g*k-d*h-e*i-f*j,a},n.mul=n.multiply,n.scale=i.scale,n.rotateX=function(a,b,c){c*=.5;var d=b[0],e=b[1],f=b[2],g=b[3],h=Math.sin(c),i=Math.cos(c);return a[0]=d*i+g*h,a[1]=e*i+f*h,a[2]=f*i-e*h,a[3]=g*i-d*h,a},n.rotateY=function(a,b,c){c*=.5;var d=b[0],e=b[1],f=b[2],g=b[3],h=Math.sin(c),i=Math.cos(c);return a[0]=d*i-f*h,a[1]=e*i+g*h,a[2]=f*i+d*h,a[3]=g*i-e*h,a},n.rotateZ=function(a,b,c){c*=.5;var d=b[0],e=b[1],f=b[2],g=b[3],h=Math.sin(c),i=Math.cos(c);return a[0]=d*i+e*h,a[1]=e*i-d*h,a[2]=f*i+g*h,a[3]=g*i-f*h,a},n.calculateW=function(a,b){var c=b[0],d=b[1],e=b[2];return a[0]=c,a[1]=d,a[2]=e,a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a},n.dot=i.dot,n.lerp=i.lerp,n.slerp=function(a,b,c,d){var e,f,g,h,i,j=b[0],k=b[1],l=b[2],m=b[3],n=c[0],o=c[1],p=c[2],q=c[3];return f=j*n+k*o+l*p+m*q,0>f&&(f=-f,n=-n,o=-o,p=-p,q=-q),1-f>1e-6?(e=Math.acos(f),g=Math.sin(e),h=Math.sin((1-d)*e)/g,i=Math.sin(d*e)/g):(h=1-d,i=d),a[0]=h*j+i*n,a[1]=h*k+i*o,a[2]=h*l+i*p,a[3]=h*m+i*q,a},n.invert=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3],g=c*c+d*d+e*e+f*f,h=g?1/g:0;return a[0]=-c*h,a[1]=-d*h,a[2]=-e*h,a[3]=f*h,a},n.conjugate=function(a,b){return a[0]=-b[0],a[1]=-b[1],a[2]=-b[2],a[3]=b[3],a},n.length=i.length,n.len=n.length,n.squaredLength=i.squaredLength,n.sqrLen=n.squaredLength,n.normalize=i.normalize,n.fromMat3=function(a,b){var c,d=b[0]+b[4]+b[8];if(d>0)c=Math.sqrt(d+1),a[3]=.5*c,c=.5/c,a[0]=(b[7]-b[5])*c,a[1]=(b[2]-b[6])*c,a[2]=(b[3]-b[1])*c;else{var e=0;b[4]>b[0]&&(e=1),b[8]>b[3*e+e]&&(e=2);var f=(e+1)%3,g=(e+2)%3;c=Math.sqrt(b[3*e+e]-b[3*f+f]-b[3*g+g]+1),a[e]=.5*c,c=.5/c,a[3]=(b[3*g+f]-b[3*f+g])*c,a[f]=(b[3*f+e]+b[3*e+f])*c,a[g]=(b[3*g+e]+b[3*e+g])*c}return a},n.str=function(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"},"undefined"!=typeof a&&(a.quat=n)}(b.exports)}(this)},{}],2:[function(a,b){var c=a("./lib/Modernizr"),d=a("./lib/ModernizrProto"),e=a("./lib/classes"),f=a("./lib/testRunner"),g=a("./lib/setClasses");f(),g(e),delete d.addTest,delete d.addAsyncTest;for(var h=0;h<c._q.length;h++)c._q[h]();b.exports=c},{"./lib/Modernizr":3,"./lib/ModernizrProto":4,"./lib/classes":5,"./lib/setClasses":22,"./lib/testRunner":27}],3:[function(a,b){var c=a("./ModernizrProto"),d=function(){};d.prototype=c,d=new d,b.exports=d},{"./ModernizrProto":4}],4:[function(a,b){var c=a("./tests"),d={_version:"v3.0.0pre",_config:{classPrefix:"",enableClasses:!0},_q:[],on:function(a,b){setTimeout(function(){b(this[a])},0)},addTest:function(a,b,d){c.push({name:a,fn:b,options:d})},addAsyncTest:function(a){c.push({name:null,fn:a})}};b.exports=d},{"./tests":28}],5:[function(a,b){var c=[];b.exports=c},{}],6:[function(a,b){function c(a,b){return!!~(""+a).indexOf(b)}b.exports=c},{}],7:[function(a,b){var c=function(){return document.createElement.apply(document,arguments)};b.exports=c},{}],8:[function(a,b){var c=a("./ModernizrProto"),d=a("./omPrefixes"),e=d.split(" ");c._cssomPrefixes=e,b.exports=e},{"./ModernizrProto":4,"./omPrefixes":19}],9:[function(a,b){var c=document.documentElement;b.exports=c},{}],10:[function(a,b){var c=a("./ModernizrProto"),d=a("./omPrefixes"),e=d.toLowerCase().split(" ");c._domPrefixes=e,b.exports=e},{"./ModernizrProto":4,"./omPrefixes":19}],11:[function(a,b){function c(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}b.exports=c},{}],12:[function(a,b){var c=a("./slice");Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var d=c.call(arguments,1),e=function(){if(this instanceof e){var f=function(){};f.prototype=b.prototype;var g=new f,h=b.apply(g,d.concat(c.call(arguments)));return Object(h)===h?h:g}return b.apply(a,d.concat(c.call(arguments)))};return e}),b.exports=Function.prototype.bind},{"./slice":23}],13:[function(a,b){function c(){var a=document.body;return a||(a=d("body"),a.fake=!0),a}var d=a("./createElement");b.exports=c},{"./createElement":7}],14:[function(a,b){function c(a,b,c,g){var h,i,j,k,l="modernizr",m=e("div"),n=f();if(parseInt(c,10))for(;c--;)j=e("div"),j.id=g?g[c]:l+(c+1),m.appendChild(j);return h=["&#173;",'<style id="s',l,'">',a,"</style>"].join(""),m.id=l,(n.fake?n:m).innerHTML+=h,n.appendChild(m),n.fake&&(n.style.background="",n.style.overflow="hidden",k=d.style.overflow,d.style.overflow="hidden",d.appendChild(n)),i=b(m,a),n.fake?(n.parentNode.removeChild(n),d.style.overflow=k,d.offsetHeight):m.parentNode.removeChild(m),!!i}var d=(a("./ModernizrProto"),a("./docElement")),e=a("./createElement"),f=a("./getBody");b.exports=c},{"./ModernizrProto":4,"./createElement":7,"./docElement":9,"./getBody":13}],15:[function(a,b){function c(a,b){return typeof a===b}b.exports=c},{}],16:[function(a,b){var c=a("./Modernizr"),d=a("./modElem"),e={style:d.elem.style};c._q.unshift(function(){delete e.style}),b.exports=e},{"./Modernizr":3,"./modElem":17}],17:[function(a,b){var c=a("./Modernizr"),d=a("./createElement"),e={elem:d("modernizr")};c._q.push(function(){delete e.elem}),b.exports=e},{"./Modernizr":3,"./createElement":7}],18:[function(a,b){function c(a,b){var c=a.length;if("CSS"in window&&"supports"in window.CSS){for(;c--;)if(window.CSS.supports(e(a[c]),b))return!0;return!1}if("CSSSupportsRule"in window){for(var f=[];c--;)f.push("("+e(a[c])+":"+b+")");return f=f.join(" or "),d("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==(window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).position})}return void 0}var d=a("./injectElementWithStyles"),e=a("./domToHyphenated");b.exports=c},{"./domToHyphenated":11,"./injectElementWithStyles":14}],19:[function(a,b){var c="Webkit Moz O ms";b.exports=c},{}],20:[function(a,b){var c=a("./ModernizrProto"),d=a("./testPropsAll"),e=c.prefixed=function(a,b,c){return b?d(a,b,c):d(a,"pfx")};b.exports=e},{"./ModernizrProto":4,"./testPropsAll":26}],21:[function(a,b){var c=a("./ModernizrProto"),d=" -webkit- -moz- -o- -ms- ".split(" ");
c._prefixes=d,b.exports=d},{"./ModernizrProto":4}],22:[function(a,b){function c(a){var b=e.className,c=d._config.classPrefix||"",f=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(f,"$1"+c+"js$2"),d._config.enableClasses&&(b+=" "+c+a.join(" "+c),e.className=b)}var d=a("./Modernizr"),e=a("./docElement");b.exports=c},{"./Modernizr":3,"./docElement":9}],23:[function(a,b){var c=a("./classes"),d=c.slice;b.exports=d},{"./classes":5}],24:[function(a,b){function c(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")&&"bind"in e?e.bind(c||b):e);return!1}var d=a("./is");a("./fnBind"),b.exports=c},{"./fnBind":12,"./is":15}],25:[function(a,b){function c(a,b,c,i){function j(){l&&(delete e.style,delete e.modElem)}if(i=h(i,"undefined")?!1:i,!h(c,"undefined")){var k=g(a,c);if(!h(k,"undefined"))return k}var l,m,n,o;e.style||(l=!0,e.modElem=f("modernizr"),e.style=e.modElem.style);for(m in a)if(n=a[m],o=e.style[n],!d(n,"-")&&void 0!==e.style[n]){if(i||h(c,"undefined"))return j(),"pfx"==b?n:!0;try{e.style[n]=c}catch(p){}if(e.style[n]!=o)return j(),"pfx"==b?n:!0}return j(),!1}var d=a("./contains"),e=a("./mStyle"),f=a("./createElement"),g=a("./nativeTestProps"),h=a("./is");b.exports=c},{"./contains":6,"./createElement":7,"./is":15,"./mStyle":16,"./nativeTestProps":18}],26:[function(a,b){function c(a,b,c,d,j){var k=a.charAt(0).toUpperCase()+a.slice(1),l=(a+" "+e.join(k+" ")+k).split(" ");return f(b,"string")||f(b,"undefined")?g(l,b,d,j):(l=(a+" "+h.join(k+" ")+k).split(" "),i(l,b,c))}{var d=a("./ModernizrProto"),e=a("./cssomPrefixes"),f=a("./is"),g=a("./testProps"),h=a("./domPrefixes"),i=a("./testDOMProps");a("./prefixes")}d.testAllProps=c,b.exports=c},{"./ModernizrProto":4,"./cssomPrefixes":8,"./domPrefixes":10,"./is":15,"./prefixes":21,"./testDOMProps":24,"./testProps":25}],27:[function(a,b){function c(){var a,b,c,h,i,j,k;for(var l in d){if(a=[],b=d[l],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(h=g(b.fn,"function")?b.fn():b.fn,i=0;i<a.length;i++)j=a[i],k=j.split("."),1===k.length?e[k[0]]=h:2===k.length&&(e[k[0]][k[1]]=h),f.push((h?"":"no-")+k.join("-"))}}var d=a("./tests"),e=a("./Modernizr"),f=a("./classes"),g=a("./is");b.exports=c},{"./Modernizr":3,"./classes":5,"./is":15,"./tests":28}],28:[function(a,b){var c=[];b.exports=c},{}],29:[function(a){var b=a("./../lib/Modernizr"),c=a("./../lib/createElement");b.addTest("canvas",function(){var a=c("canvas");return!(!a.getContext||!a.getContext("2d"))})},{"./../lib/Modernizr":3,"./../lib/createElement":7}],30:[function(a){var b=a("./../lib/Modernizr"),c=a("./../lib/prefixed");b.addTest("requestanimationframe",!!c("requestAnimationFrame",window),{aliases:["raf"]})},{"./../lib/Modernizr":3,"./../lib/prefixed":20}],31:[function(a){var b,c,d,e,f,g,h,i=function(a,b){return function(){return a.apply(b,arguments)}};a("browsernizr/test/canvas"),a("browsernizr/test/requestanimationframe"),d=a("browsernizr"),console.log(d),h=a("glmatrix"),f=h.mat2d,g=h.vec2,e=function(){function a(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d,this.inflate=i(this.inflate,this)}return a.prototype.inflate=function(a,b){return this.x-=a,this.y-=b,this.w+=2*a,this.h+=2*b},a.prototype.contains=function(a){var b,c;return this.x<=(b=a[0])&&b<=this.x+this.w&&this.y<=(c=a[1])&&c<=this.y+this.h},a}(),b=function(){function a(){this.draw=i(this.draw,this),this.hide=i(this.hide,this),this.show=i(this.show,this),document.getElementById("masthead").style.backgroundColor="white",this.canvas=document.createElement("canvas"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,document.body.appendChild(this.canvas),this.canvas.style.position="fixed",this.canvas.style.left=0,this.canvas.style.top=0,this.canvas.style.display="none",this.hidden=!0,this.navi=document.getElementById("navi"),this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="red",this.ctx.fillRect(0,0,100,100)}return a.prototype.show=function(){return this.canvas.style.display="block",this.hidden=!1,this.draw()},a.prototype.hide=function(){return this.canvas.style.display="none",this.hidden=!0},a.prototype.draw=function(a){var b,c,d,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;if(a?this.params=a:a=this.params,!this.hidden){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle=a.bgcolor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),c=[Math.round((window.innerWidth-950)/2),Math.round(this.navi.getBoundingClientRect().top)],v=window.innerWidth,l=window.innerHeight;try{for(o=f.create(),f.rotate(o,o,a.rotation*Math.PI/180),f.translate(o,o,[-(c[0]+a.origin.x),-(c[1]+a.origin.y)]),b=a.shear*Math.PI/180,f.multiply(o,[1,Math.sin(b),0,Math.cos(b),0,0],o),t=g.transformMat2d(g.create(),[0,0],o),u=g.transformMat2d(g.create(),[v,0],o),d=g.transformMat2d(g.create(),[0,l],o),h=g.transformMat2d(g.create(),[v,l],o),x=Math.min(t[0],u[0],d[0],h[0]),y=Math.max(t[0],u[0],d[0],h[0]),A=Math.min(t[1],u[1],d[1],h[1]),B=Math.max(t[1],u[1],d[1],h[1]),q=a.radius,n=a.interval,m=new e(0,0,v,l),m.inflate(q,q),f.invert(o,o),s=Math.ceil((A-q)/n)*n,k=Math.ceil((B+q)/n)*n,r=Math.ceil((x-q)/n)*n,j=Math.ceil((y+q)/n)*n,p=g.create(),this.ctx.fillStyle=a.color,D=[],z=C=s;n>0?k>C:C>k;z=C+=n)D.push(function(){var a,b;for(b=[],w=a=r;n>0?j>a:a>j;w=a+=n)g.transformMat2d(p,[w,z],o),m.contains(p)?(this.ctx.beginPath(),this.ctx.arc(p[0],p[1],q,0,2*Math.PI,!1),b.push(this.ctx.fill())):b.push(void 0);return b}.call(this));return D}catch(E){return i=E,console.log(i)}}},a}(),c=function(){function a(){}return a.prototype.show=function(){},a.prototype.hide=function(){},a.prototype.draw=function(){},a}(),window.dotgen=d.canvas?new b:new c},{browsernizr:2,"browsernizr/test/canvas":29,"browsernizr/test/requestanimationframe":30,glmatrix:1}]},{},[31]);