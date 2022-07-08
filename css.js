const string = `
.skin *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.skin *::before,.skin *::after{
    box-sizing: border-box;
}
.skin{
    position: relative;
    background: #FFE600;
    min-height: 50vh;
}
@media (max-width: 500px) {
        .skin{
            margin-left: -40px;
        }
     }
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 15px;
    border-color: black transparent transparent;
    border-radius: 13px;
    position: absolute;
    left: 50%;
    top:100px;
    margin-left: 8px;
}
@media (max-width: 500px) {
     border-width: 12px;
     top:190px;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }33%{
        transform: rotate(5deg);
    }66%{
        transform: rotate(-5deg);
    }100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}
.eye-left,.eye-right{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    top:70px;
    left: 50%;
    position: absolute;
    background: #2E2E2E;
}
@media (max-width: 500px) {
    width: 54px;
    height: 54px;
    top:160px;
}
.eye-left{
    transform: translateX(-140px);
}
.eye-right{
    transform: translateX(120px);
}
 .eye-left::before,.eye-right::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid black;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 8px;
    top:1px;
} 
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top:140px;
    margin-left: -80px;
    position: relative;
}
.mouth-left,
.mouth-right{
    border:4px solid black;
    border-style: solid;
    width: 100px;
    height: 30px;
    border-top: none;
    position: absolute;
    top: -12px;
    z-index: 1;
    background: #FFE600;
}
@media (max-width: 500px) {
   .mouth-left,
   .mouth-right{
            border:3px solid black;
            width: 83px;
            height: 27px;
            top: -12px;
            border-top: none;
        }
}
.mouth-left{
    border-right: none;
    border-bottom-left-radius: 80px 60px;
    transform: rotate(-20deg);
}
.mouth-right{
    border-left: none;
    border-bottom-right-radius: 80px 60px;
    transform: rotate(20deg);
    left: 100px;
}
@media (max-width: 500px) {
    .mouth-right{
    border-left: none;
    border-bottom-right-radius: 80px 60px;
    transform: rotate(20deg);
    left: 88px;
        }
}
.down{
    position: relative;
    height: 160px;
    overflow: hidden;
}
.mouth-up{
    border:3px solid black;
    width: 200px;
    height: 800px;
    position: absolute;
    bottom: 0px;
    border-radius:125px/500px;
    background: #9B000A; 
    overflow: hidden;
}
@media (max-width: 500px) {
    .mouth-up{
            border:3px solid black;
            width: 166px;
            height: 555px;
            left:4px;
            border-radius:150px/500px;
        }
}
.mouth-down{
    width: 200px;
    height: 300px;
    position: absolute;
    bottom:-170px;
    left: 50%;
    margin-left: -100px;
    border-radius:100px;
    background: #FF485F;
}
.face-left,.face-right{
    border:3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    top:200px;
    background: #f00;
    border-radius: 50%;
}
@media (max-width: 500px) {
      .face-left,.face-right{
        border:3px solid black;
        width: 70px;
        height: 70px;
        top:185px;
    }
}
.face-left{
    margin-left: -210px;
}
.face-right{
    margin-left:170px;
}
`;
export default string;