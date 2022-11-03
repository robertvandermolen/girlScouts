
		
		
		
		//STUFF TO KEEP TRACK OF WHERE WE ARE
		var inLogo=1;
		var inGame=0;
		var inSetUp=0;
		var inQuestion=0;
		var logoLoaded=0;
		var bannerLoaded=0;
		
		
		
		var lettersConvert=[['A','B','C','D'],['E','F','G','H'],['I','J','K','L'],['M','N','O','P'],['Q','R','S','T']];
		
		
		
		// QUESTION BANK
		
		/*
		var apQuestions=[];
		
			
		var temper=document.createElement('div');
		temper.innerHTML="<iframe src='calcQuestions.txt' id='data'></iframe>";
		document.body.appendChild(temper);
		var temp=document.getElementById('data');
		temp.contentWindow.onload=function(){
			//console.log('poop');
			//console.log('working...');
			//console.log('joe reloaded the page');
			makeJoeQuestions(temp.contentWindow.document.body.innerHTML,'ap');
			//console.log(apQuestions.length);
			temper.parentNode.removeChild(temper);
			
		};
		*/
		//var myWindow=window.open('calcQuestions.html');
		//myWindow.document.write("<iframe src='calcQuestions.txt' id='data'></iframe>");
		//console.log(myWindow.document);
		//myWindow.close();
		
		
		
		
		
		var usedQuestions=[];
		var Questions=[];
		var oldQuestions;
		
		
		
		
		//EVENT LISTENER TO RESIZE
		window.addEventListener("resize", function(){
			
			
			
			
			w=window.innerWidth;
			h=window.innerHeight;
			
		
			
			
			if (inLogo==1){
			logo.parentNode.removeChild(logo);
			logobtnHolder.parentNode.removeChild(logobtnHolder);
			makeLogo();
			
			}
			
			if (inGame==1){
				//btnHolder.parentNode.removeChild(btnHolder);
				//console.log(inQuestion);
				if (inQuestion==1){
					
					as.parentNode.removeChild(as);
					gbQhlder.parentNode.removeChild(gbQhlder);
					
					makeQuestions(Questions[phiphi][0],Questions[phiphi][1],Questions[phiphi][2],Questions[phiphi][3],Questions[phiphi][4]);
					
					//QuestionGame(phi);
					
					
				}
				
				
				
				
				
				
			
			else{
				
				gb.parentNode.removeChild(gb);
				qs.parentNode.removeChild(qs);
				
				
				makeBoard();
				var pee;
				var peepee;
				for (pee=0; pee<redBlocks.length;pee++){
					for (peepee=0;peepee<4;peepee++){
						if (redBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'red');	
						}
						if (blueBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'blue');	
						}
						if (blackBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'black');	
						}
						if (yx!='na' && yy!='na'){
						fillBlock(yx,yy,'yellow');	
						}
					}
				}
				document.body.appendChild(qs);
				
				
			}
			}
			
		
	
			
  
		});
		
	
		
		
		
		
		
		

		// FUNCTIONS
		
		
		function makeSetUp(){
			bannerDiv.innerHTML='<img src="banner.png" style="width: 65%">';
			document.body.appendChild(dummies);
			document.body.appendChild(theBottom);
			//userFile=document.getElementById('user file');
			
			btn=document.getElementById('playbutton');
			btn.addEventListener('click',pressedPlay);
		//dummies.parentNode.removeChild(dummies);	
		}
		
		
		
		
		function pressedPlay(e){
			
			var noGo=0;
			if (userQuestions.length!=0){
				previewDiv.parentNode.removeChild(previewDiv);
			}
			redna=document.getElementById('redname').value;
			bluena=document.getElementById('bluename').value;
			if (whichQuestions==0){
				Questions=oldQuestions;	
			}
			if (whichQuestions==1 && userQuestions.length!=0){
				Questions=userQuestions;
			}
			if (whichQuestions==2){
				Questions=apQuestions;
			}
			if (whichQuestions==1 && userQuestions==0){
			alert('You have selected to use your own questions except you have failed to load valid questions try again or select default!');
				noGo=1;
			}
			if (noGo==0){
			if (redna!='FIRST TEAM NAM' && bluena!='SECOND TEAM NAM'){
				
				// UNLOAD LOGO SCREEN
				dummies.parentNode.removeChild(dummies);
				theBottom.parentNode.removeChild(theBottom);
				
				bannerDiv.innerHTML='<img src="banner.png" style="width: 35%">';
				//logo.parentNode.removeChild(logo);
				
				inLogo=0;
				inSetUp=0;
				inGame=1;
				
				// LOAD BOARD 
				makeBoard();
				
				
				
				
				//PLAY GAME
				startRound();
				
				
			}
				
			else{
				alert('Please type in NEW team names!');	
				}
			}
			//console.log('worked');
		};
		
		
		//TAKES CARE OF DROP DOWN 
		var steez=function(e){
			var theseQuestions=e.target.value;
			whichQuestions=theseQuestions;
			if (theseQuestions==1){
					theBottom.innerHTML=chooseFileInner+playbuttonInner;
					btn=document.getElementById('playbutton');
					userFile=document.getElementById('user file');
					btn.addEventListener('click',pressedPlay);
					actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
				userQuestions=[];
			}
			if (theseQuestions==0){
				questionsRawTxt='';
				userQuestions=[];
				theBottom.innerHTML='<p></p><br/><font color="red">Default Questions loaded!</font>'+playbuttonInner;
				btn=document.getElementById('playbutton');
				btn.addEventListener('click',pressedPlay);
				actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
				
			}
			if (theseQuestions==2){
				questionsRawTxt='';
				theBottom.innerHTML='<p></p><br/><font color="red">AP Calc Questions loaded!</font>'+playbuttonInner;
				userQuestions=[];
				
				btn=document.getElementById('playbutton');
				btn.addEventListener('click',pressedPlay);
				actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
			}
		//console.log(theseQuestions);	
		};
		
		function makePreviewButton(){
			
			previewDiv.innerHTML=previewQuestionsInner;
			document.body.appendChild(previewDiv);
			prvBtn=document.getElementById('preview questions');
			prvBtn.addEventListener('click',previewClicked);
			
			//previewQuestionsInner='<div><p></p><br/><input type="button" value="preview questions" id="preview questions"></div>';
			
			
		};
		
		function previewClicked(e){
			
			//actualPreviewInner=actualPreviewInner+'<p></p><br/>';
			var pr;
			for (pr=0;pr<userQuestions.length;pr++){
				var reallyreally=pr+1;
				var step1='<p></p></br><strong>Question #'+reallyreally+':</strong> ';
				var st;
				for (st=0;st<6;st++){
					if (st==0){
						actualPreviewInner=actualPreviewInner+step1+userQuestions[pr][0];	
					}
					
						if (st==1){
				actualPreviewInner=actualPreviewInner+'<p></p><strong>(a)</strong> '+userQuestions[pr][st];}
					
					if (st==2){
				actualPreviewInner=actualPreviewInner+'<p></p><strong>(b)</strong> '+userQuestions[pr][st];}
					
				if (st==3){
				actualPreviewInner=actualPreviewInner+'<p></p><strong>(c)</strong> '+userQuestions[pr][st];}
				if (st==4){
				actualPreviewInner=actualPreviewInner+'<p></p><strong>(d)</strong> '+userQuestions[pr][st];}
						if (st==5){
				actualPreviewInner=actualPreviewInner+'<p></p><strong>Actual Answer:</strong> '+userQuestions[pr][st];}
					
					}
			}
				previewDiv.innerHTML=actualPreviewInner;
			
			MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			
			actualPreviewInner='';
		
				
				
			
			prvBtn.removeEventListener('click',previewClicked);
			
		};
		
		
		
		//TAKES CARE OF FILE LOADING
		var openFile = function(event) {
    		var input = event.target;

   		 	var reader = new FileReader();
    		reader.onload = function(){
      			var text = reader.result;
				userQuestions=[];
				makeUserQuestions(text);
				
				
      			
				//document.write(reader.result);
    		};
    		reader.readAsText(input.files[0]);
  		};
		
		function makeUserQuestions(s){
			var fart;
			var whichQuestionAt=0;
			var needA=0;
			var needB=0;
			var needC=0;
			var needD=0;
			var needF=0;
			var qStart='';
			var qEnd='';
			var aStart='';
			var aEnd='';
			var bStart='';
			var bEnd='';
			var cStart='';
			var cEnd='';
			var dStart='';
			var dEnd='';
			var theEnd=0;
			var badF=0;
			var whatF='';
			for (fart=0;fart<s.length;fart++){
				
				if (s.substring(fart,fart+9)=='\\question'){
					if (needA==0 &&  needB==0 && needC==0 && needD==0 && needF==0){
					qStart=fart+10;
					whichQuestionAt=whichQuestionAt+1;
					needA=1;
					needB=1;
					needC=1;
					needD=1;
					needF=1;
					}
					else{
						break
					}
					
					//console.log(s.substring(fart, fart+2));
				}
				if (qStart!='' && s.substring(fart,fart+5)=='\\ansa'){
					needA=0;
					aStart=fart+6;
					qEnd=fart-1;
				}
				if (aStart!='' && s.substring(fart,fart+5)=='\\ansb'){
					aEnd=fart-1;	
					needB=0;
					bStart=fart+6;
				}
				if (aStart!='' && aEnd!=''){
					tempQuestion[1]=s.substring(aStart,aEnd);
					
					aStart='';
					aEnd='';
				}
				if (bStart!='' && s.substring(fart,fart+5)=='\\ansc'){
					bEnd=fart-1;
					needC=0;
					cStart=fart+6;
				}
				if (bStart!='' && bEnd!=''){
					
					tempQuestion[2]=s.substring(bStart,bEnd);
					bStart='';
					bEnd='';
				}
				if (cStart!='' && s.substring(fart,fart+5)=='\\ansd'){
					cEnd=fart-1;
					needD=0;
					dStart=fart+6;
				}
				if (cStart!='' && cEnd!=''){
				
					tempQuestion[3]=s.substring(cStart,cEnd);
					cStart='';
					cEnd='';
				}
				if (dStart!='' && s.substring(fart,fart+4)=='\\sol'){
					needF=0;
					dEnd=fart-1;
					var soMany=s.substring(fart+5,fart+6);
					if (soMany=='a' || soMany=='b' || soMany=='c' || soMany=='d'){
					tempQuestion[5]=s.substring(fart+5,fart+6);
					}
					else{
						badF=1;
						whatF=soMany;
					break	
					}
				}
				if (dStart!='' && dEnd!=''){
					
					tempQuestion[4]=s.substring(dStart,dEnd);
					dStart='';
					dEnd='';
					theEnd=1;
				}
				if (theEnd==1){
					userQuestions.push(tempQuestion);	
					theEnd=0;
					cleanTempQuestion();
				}
				
			
				if (qStart!='' && qEnd!=''){
					tempQuestion[0]=s.substring(qStart,qEnd);
					qStart='';
					qEnd='';
					
				}
				
				
			}
			
			if (whichQuestionAt==0){
			var errorMessage='Could not find any questions in the file you loaded make sure it is the correct file and recall that you use \\question to indicate the start of a question';	
				userFile.value='';
				alert(errorMessage);
				userQuestions=[];
				cleanTempQuestion();
				actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
			}
			
			if (badF==1){
			var errorMessage='\\sol is used to indicate the correct answer to the preceding question and only looks at the next letter.\n Your next letter was: '+whatF+'\n but it must be either a, b, c, or d';
				alertQuestionError(whichQuestionAt,errorMessage);
				userQuestions=[];
				cleanTempQuestion();
				actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
			}
			
			//console.log(userQuestions);
			if (needA==1 || needB==1 || needC==1 || needD==1 || needF==1){
				actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
				var errorMessage='You may be missing ';
				var orError='\n\n Also the answers must be written IN ORDER that is \\ansa must come BEFORE \\ansb etc. \n\n And do not forget that each question must have EVERY CHOICE that is \\ansa, \\ansb, \\ansc, \\ansd, and \\sol must appear for each question';
				if (needA==1){
					errorMessage=errorMessage+'an answer for choice "a" indicated in your code by \\ansa  ';
				}
				if (needB==1 && needA!=1){
					errorMessage=errorMessage+'an answer for choice "b" indicated in your code by \\ansb  ';
					
				}
				if (needC==1 && needB!=1){
					errorMessage=errorMessage+'an answer for choice "c" indicated in your code by \\ansc  ';	
				}
				if (needD==1 && needC!=1){
					errorMessage=errorMessage+'an answer for choice "d" indicated in your code by \\ansd  ';	
				}
				if (needF==1 && needD!=1){
					errorMessage=errorMessage+'the correct answer indicated in your code by \\sol  ';
				}
				alertQuestionError(whichQuestionAt,errorMessage+orError);
				userQuestions=[];
				
				cleanTempQuestion();
			}
			//alertQuestionError(1,'this is a test');
			
			if (userQuestions.length!=0){
			
				makePreviewButton();
				
			}
			
		}
		
		function cleanTempQuestion(){
			tempQuestion=['','not a choice','not a choice','not a choice','not a choice',''];
		}
		
		function alertQuestionError(where,what){
		alert('OOPS... it looks like you have a syntax error in question '+where+' of your file... please fix your error and reload the file! \n \n'+'ERROR MESSAGE:\n '+what);
			userFile.value='';
		}
		
		
		
		
		
		
		function randomQuestion(T){
			
			//inQuestion=1;
			
			// THE FOLLOWING IS JUST TO TEST THE MOST RECENT QUESTION WRITTEN!
			
			/*
			var skee=Questions.length-1;
			
			an=Questions[skee][5];
			makeQuestions(Questions[skee][0],Questions[skee][1],Questions[skee][2],Questions[skee][3],Questions[skee][4]);
						
			*/
			if (randomYet==0){
				randomYet=1;
				makeRandom();
			}
			var toot=true;
			var skee=Math.random();
			skee=skee*Questions.length;
			skee=Math.floor(skee);
			var pooper;
			var poopy;
			var poopshoot=0;
			var helper=Questions.length;
		for (poopy=0;poopy<Questions.length;poopy++){
			if (usedQuestions[poopy]==1){
				poopshoot=poopshoot+1
			}
		}
		
			
			if (poopshoot==helper){
					for (pooper=0;pooper<Questions.length;pooper++){
						usedQuestions[pooper]=0;	
						
					}
				//document.write('yes it worked');
			}
			while (toot){
			if (usedQuestions[skee]==1){
				skee=Math.random();
				skee=skee*Questions.length;
				skee=Math.floor(skee);
			}else{
					toot=false;
				usedQuestions[skee]=1;
			currentQuestion=skee;
			phiphi=skee;
			an=Questions[skee][5];
			makeQuestions(Questions[skee][0],Questions[skee][1],Questions[skee][2],Questions[skee][3],Questions[skee][4]);
			
				}
			}
			
			
			
			
		}

		function makeBoard(){
			
		sieze=Math.min(w,h);
		tops=sieze/(2*1.5*4.5);
		sideskip=0.66*tops;
		downskip=0.75*tops;
			
			// NEXT ROUND AND REDO BUTTON CREATION
			document.body.appendChild(btnHolder);
			redoBtn=document.getElementById('redobutton');
			nextBtn=document.getElementById('nextbutton');
			
		
			
			// GAME BOARD CREATION
			document.body.appendChild(gb);
			
			canvasGB=document.getElementById('gbCanvas');
			elemLeft = canvasGB.offsetLeft;
    		elemTop = canvasGB.offsetTop;
				//console.log(elemLeft+'\n'+elemTop);
			widthGB=canvasGB.width=w-14.0000001;
			heightGB=canvasGB.height=7.5*tops+10;
			ctxGB=canvasGB.getContext('2d');
			
			// SET LINE WIDTH
			ctxGB.lineWidth=tops*(3/48.6);
			
			// DRAW BOARD
			var i;
			var k;
			for (i=0;i<5;i++){
				
				for (k=0;k<4;k++){
					drawBlock(i,k);	
					
				}
			}
		}
		
		
		function startRound(){
			
			inQuestion=0;
			//console.log('started round \n'+inQuestion);
			chooseBlock(correctRound);
			redoBtn.removeEventListener('click',rdPushed);
			//console.log(previousX);
			if (previousX!='na'){
			redoBtn.addEventListener('click',redoAfterNext);
			}
			
		}
		
		function redoAfterNext(e){
			//inQuestion=0;
			//console.log(previousX+'\n'+previousY);
			if (previousX!='na' && previousY!='na'){
				
				gb.parentNode.removeChild(gb);
				qs.parentNode.removeChild(qs);
				
				
				
				/*
				fillBlock(previousX,previousY,'');
				console.log('apparently does drawBlock???');
				drawBlock(previousX,previousY);
				*/
				if (blackBlocks[previousX][previousY]==1){
					blackBlocks[previousX][previousY]=0;
					
				}
				if (blueBlocks[previousX][previousY]==1){
					blueBlocks[previousX][previousY]=0;
				}
				if (redBlocks[previousX][previousY]==1){
					redBlocks[previousX][previousY]=0;
				}
				
				makeBoard();
				var pee;
				var peepee;
				for (pee=0; pee<redBlocks.length;pee++){
					for (peepee=0;peepee<4;peepee++){
						if (redBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'red');	
						}
						if (blueBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'blue');	
						}
						if (blackBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'black');	
						}
						
					}
				}
				
				document.body.appendChild(qs);
				}
			
			if (PreviousCorrect!='na'){
				
				correctRound=PreviousCorrect;	
			}
			qs.parentNode.removeChild(qs);
			startRound();
			redoBtn.removeEventListener('click',redoAfterNext);
		}
			
			
		
		function chooseBlock(T){
			var phi='Choose a Block!';
			if (T==0){
				phi='<p></p><font color="red">'+redna+"</font>"+' '+phi+'<p></p>';
			}
				else{
					phi='<p></p><font color="blue">'+bluena+"</font>"+' '+phi+'<p></p>';
				}
			
				qs.innerHTML=phi;
				document.body.appendChild(qs);
				
				canvasGB.addEventListener('click',yellowBlock);
			
		}
		
		function QuestionGame(s){
			
			hh=Math.min(h,w/2);
		tops2=hh/(2*1.5*4.5);
		sideskip2=0.66*tops2;
		downskip2=0.75*tops2;
		
		if (inQuestion==0){
		gb.parentNode.removeChild(gb);
			inQuestion=1;
		}
			//document.body.appendChild(gb);
	
		document.body.appendChild(gbQhlder);
		questionCol=document.getElementById('question col');
		canvasGB2=document.getElementById('gb2Canvas');
		widthGB2=canvasGB2.width=w/2;
		heightGB2=canvasGB2.height=0.5*h+17;
		ctxGB2=canvasGB2.getContext('2d');
		
		
		questionCol.innerHTML=s;
			
		// SET LINE WIDTH
		ctxGB2.lineWidth=tops2*(3/48.6);
			
		// DRAW BOARD
		var itsall;
		var kall;
		for (itsall=0;itsall<5;itsall++){
			
			for (kall=0;kall<4;kall++){
				drawBlock2(itsall,kall);	
			}
		}
			
			var pee1;
				var pee1pee1;
				for (pee1=0; pee1<redBlocks.length;pee1++){
					for (pee1pee1=0;pee1pee1<4;pee1pee1++){
						if (redBlocks[pee1][pee1pee1]==1){
						fillBlock2(pee1,pee1pee1,'red');	
						}
						if (blueBlocks[pee1][pee1pee1]==1){
						fillBlock2(pee1,pee1pee1,'blue');	
						}
						if (blackBlocks[pee1][pee1pee1]==1){
						fillBlock2(pee1,pee1pee1,'black');	
						}
						
						if (yx!='na' && yy!='na'){
						fillBlock2(yx,yy,'yellow');	
						}
						
					}
				}
			
			
			
		}
		
		
		
		
	
		
		function makeQuestions(Q,Aa,Ab,Ac,Ad){
			
			var phi='<p></p><strong>Question: </strong>'+Q+'<p></p><div>'+'<strong>(a) </strong>'+Aa+'</div><p></p>'+'<div><strong>(b) </strong>'+Ab+'</div><p></p>'+'<div><strong>(c) </strong>'+Ac+'</div><p></p>'+'<div><strong>(d) </strong>'+Ad+'</div>'+'<p></p>';
			
			//qs.innerHTML=phi;
			//document.body.appendChild(qs);
			QuestionGame(phi);
			
			as.innerHTML='<div class="column" align="center" ><font color="red">'+redna+' </font> answer:<div> <input Id="rra" type="button" value="(a)"><input id="rrb" type="button" value="(b)"><input id="rrc" type="button" value="(c)"><input id="rrd" type="button" value="(d)"><div id="red answer block"></div></div></div> <div class="column" align="center"><font color="blue">'+bluena+' </font>answer:<div> <input id="bba" type="button" value="(a)"><input id="bbb" type="button" value="(b)"><input id="bbc" type="button" value="(c)"><input id="bbd" type="button" value="(d)"><div id="blue answer block"></div></div></div>';
			document.body.appendChild(as);
			redAnswerBlock=document.getElementById('red answer block');
			blueAnswerBlock=document.getElementById('blue answer block');
			ra=document.getElementById('rra');
			rb=document.getElementById('rrb');
			rc=document.getElementById('rrc');
			rd=document.getElementById('rrd');
			
			ba=document.getElementById('bba');
			bb=document.getElementById('bbb');
			bc=document.getElementById('bbc');
			bd=document.getElementById('bbd');
			
			
			

			
			
			ra.addEventListener('click',redCheckAnswera);
			rb.addEventListener('click',redCheckAnswerb);
			rc.addEventListener('click',redCheckAnswerc);
			rd.addEventListener('click',redCheckAnswerd);
			
			ba.addEventListener('click',blueCheckAnswera);
			bb.addEventListener('click',blueCheckAnswerb);
			bc.addEventListener('click',blueCheckAnswerc);
			bd.addEventListener('click',blueCheckAnswerd);
			
			redoBtn.removeEventListener('click',redoAfterNext);
			nextBtn.addEventListener('click',nxtPushed);
			redoBtn.addEventListener('click',rdPushed);
			
			MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			
		}
		
		function nxtPushed(e){
			
			
			
			PreviousCorrect=correctRound;
			if (redRound==1){
				correctRound=0;
				fillBlock(yx,yy,'red');
				redBlocks[yx][yy]=1;
			}
			else if (blueRound==1){
				correctRound=1;
				fillBlock(yx,yy,'blue');
				blueBlocks[yx][yy]=1;
			}
			else{
				fillBlock(yx,yy,'black');
				blackBlocks[yx][yy]=1;
			}
			previousX=yx;
			previousY=yy;
			//console.log('next round was pressed and previousX= '+previousX);
			yx='na';
			yy='na';
			redRound=0;
			blueRound=0;
			
			
			if (inQuestion==1){
				gbQhlder.parentNode.removeChild(gbQhlder);
				as.parentNode.removeChild(as);
				//document.body.appendChild(gbQhlder);
				makeBoard();
				var pee;
				var peepee;
				for (pee=0; pee<redBlocks.length;pee++){
					for (peepee=0;peepee<4;peepee++){
						if (redBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'red');	
						}
						if (blueBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'blue');	
						}
						if (blackBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'black');	
						}
						if (yx!='na' && yy!='na'){
						fillBlock(yx,yy,'yellow');	
						}
					}
				}
				
				
			}
			
			//remove questions 
			//gbQhlder.parentNode.removeChild(gbQhlder);
			
			//remove answers
			//as.parentNode.removeChild(as);
			
			nextBtn.removeEventListener('click',nxtPushed);
			redoBtn.removeEventListener('click',rdPushed);
			
			
			//start over 
			startRound();
			
		}
			
		
		function rdPushed(e){
			if (inQuestion==1){
				gbQhlder.parentNode.removeChild(gbQhlder);
				as.parentNode.removeChild(as);
				//document.body.appendChild(gbQhlder);
				makeBoard();
				var pee;
				var peepee;
				for (pee=0; pee<redBlocks.length;pee++){
					for (peepee=0;peepee<4;peepee++){
						if (redBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'red');	
						}
						if (blueBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'blue');	
						}
						if (blackBlocks[pee][peepee]==1){
						fillBlock(pee,peepee,'black');	
						}
						
					}
				}
				
				
			}
			
			inQuestion=0;
			
			//remove questions 
			//gbQhlder.parentNode.removeChild(gbQhlder);
			
			//remove answers
			//as.parentNode.removeChild(as);
			
			// change yellow block back to white
			//fillBlock(yx,yy,'white');
			//drawBlock(yx,yy);
			// reset yx and yy to 'na'
			yx='na';
			yy='na';
			// reset redRound and blueRound to 0
			redRound=0;
			blueRound=0;
			usedQuestions[currentQuestion]=0;
			
			
			
			redoBtn.removeEventListener('click',rdPushed);

			// start over
			startRound();
			
		}
		
		function redCheckAnswera(e){
			if ('a'== an){
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> CORRECT! </font></strong>";
				ba.removeEventListener('click',blueCheckAnswera);
				bb.removeEventListener('click',blueCheckAnswerb);
				bc.removeEventListener('click',blueCheckAnswerc);
				bd.removeEventListener('click',blueCheckAnswerd);
				redRound=1;
				blueRound=0;
			}
			else{
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> WRONG! </font></strong>";
				redRound=0;
			}
			ra.removeEventListener('click',redCheckAnswera);
			rb.removeEventListener('click',redCheckAnswerb);
			rc.removeEventListener('click',redCheckAnswerc);
			rd.removeEventListener('click',redCheckAnswerd);
			ba.removeEventListener('click',blueCheckAnswera);
			
		}
		
		function redCheckAnswerb(e){
			if ('b'== an){
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> CORRECT! </font></strong>";
				ba.removeEventListener('click',blueCheckAnswera);
				bb.removeEventListener('click',blueCheckAnswerb);
				bc.removeEventListener('click',blueCheckAnswerc);
				bd.removeEventListener('click',blueCheckAnswerd);
				redRound=1;
				blueRound=0;
			}
			else{
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> WRONG! </font></strong>";
				redRound=0;
			}
			ra.removeEventListener('click',redCheckAnswera);
			rb.removeEventListener('click',redCheckAnswerb);
			rc.removeEventListener('click',redCheckAnswerc);
			rd.removeEventListener('click',redCheckAnswerd);
			bb.removeEventListener('click',blueCheckAnswerb);
		
			
		}
		
		function redCheckAnswerc(e){
			if ('c'== an){
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> CORRECT! </font></strong>";
				ba.removeEventListener('click',blueCheckAnswera);
				bb.removeEventListener('click',blueCheckAnswerb);
				bc.removeEventListener('click',blueCheckAnswerc);
				bd.removeEventListener('click',blueCheckAnswerd);
				redRound=1;
				blueRound=0;
			}
			else{
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> WRONG! </font></strong>";
				redRound=0;
			}
			ra.removeEventListener('click',redCheckAnswera);
			rb.removeEventListener('click',redCheckAnswerb);
			rc.removeEventListener('click',redCheckAnswerc);
			rd.removeEventListener('click',redCheckAnswerd);
			bc.removeEventListener('click',blueCheckAnswerc);
			
		}
		
		function redCheckAnswerd(e){
			if ('d'== an){
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> CORRECT! </font></strong>";
				ba.removeEventListener('click',blueCheckAnswera);
				bb.removeEventListener('click',blueCheckAnswerb);
				bc.removeEventListener('click',blueCheckAnswerc);
				bd.removeEventListener('click',blueCheckAnswerd);
				redRound=1;
				blueRound=0;
			}
			else{
				redAnswerBlock.innerHTML="<p></p><strong><font color='red'> WRONG! </font></strong>";
				redRound=0;
			}
			ra.removeEventListener('click',redCheckAnswera);
			rb.removeEventListener('click',redCheckAnswerb);
			rc.removeEventListener('click',redCheckAnswerc);
			rd.removeEventListener('click',redCheckAnswerd);
			bd.removeEventListener('click',blueCheckAnswerd);
			
		}
		
		function blueCheckAnswera(e){
			if ('a'== an){
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> CORRECT! </font></strong>";
				ra.removeEventListener('click',redCheckAnswera);
				rb.removeEventListener('click',redCheckAnswerb);
				rc.removeEventListener('click',redCheckAnswerc);
				rd.removeEventListener('click',redCheckAnswerd);
				redRound=0;
				blueRound=1;
			}
			else{
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> WRONG! </font></strong>";
				blueRound=0;
			}
			ba.removeEventListener('click',blueCheckAnswera);
			bb.removeEventListener('click',blueCheckAnswerb);
			bc.removeEventListener('click',blueCheckAnswerc);
			bd.removeEventListener('click',blueCheckAnswerd);
			ra.removeEventListener('click',redCheckAnswera);
			
		}
		
		function blueCheckAnswerb(e){
			if ('b'== an){
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> CORRECT! </font></strong>";
				ra.removeEventListener('click',redCheckAnswera);
				rb.removeEventListener('click',redCheckAnswerb);
				rc.removeEventListener('click',redCheckAnswerc);
				rd.removeEventListener('click',redCheckAnswera);
				redRound=0;
				blueRound=1;
			}
			else{
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> WRONG! </font></strong>";
				blueRound=0;
			}
			ba.removeEventListener('click',blueCheckAnswera);
			bb.removeEventListener('click',blueCheckAnswerb);
			bc.removeEventListener('click',blueCheckAnswerc);
			bd.removeEventListener('click',blueCheckAnswerd);
			rb.removeEventListener('click',redCheckAnswerb);
			
		}
			
		
		
		function blueCheckAnswerc(e){
			if ('c'== an){
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> CORRECT! </font></strong>";
				ra.removeEventListener('click',redCheckAnswera);
				rb.removeEventListener('click',redCheckAnswerb);
				rc.removeEventListener('click',redCheckAnswerc);
				rd.removeEventListener('click',redCheckAnswerd);
				redRound=0;
				blueRound=1;
			}
			else{
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> WRONG! </font></strong>";
				blueRound=0;
			}
			ba.removeEventListener('click',blueCheckAnswera);
			bb.removeEventListener('click',blueCheckAnswerb);
			bc.removeEventListener('click',blueCheckAnswerc);
			bd.removeEventListener('click',blueCheckAnswerd);
			rc.removeEventListener('click',redCheckAnswerc);
			
		}
		
		function blueCheckAnswerd(e){
			if ('d'== an){
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> CORRECT! </font></strong>";
				ra.removeEventListener('click',redCheckAnswera);
				rb.removeEventListener('click',redCheckAnswerb);
				rc.removeEventListener('click',redCheckAnswerc);
				rd.removeEventListener('click',redCheckAnswerd);
				redRound=0;
				blueRound=1;
			}
			else{
				blueAnswerBlock.innerHTML="<p></p><strong><font color='blue'> WRONG! </font></strong>";
				blueRound=0;
			}
			ba.removeEventListener('click',blueCheckAnswera);
			bb.removeEventListener('click',blueCheckAnswerb);
			bc.removeEventListener('click',blueCheckAnswerc);
			bd.removeEventListener('click',blueCheckAnswerd);
			rd.removeEventListener('click',redCheckAnswerd);
			
		}
		
		
		
		
		
		function yellowBlock(e){
			var x=e.clientX-elemLeft;
			var y=e.clientY-elemTop;
			
			//console.log(helpx+'\n'+helpy);
			
			
			var jj;
			var kk;
					
			
			
			
			for (jj=0;jj<5;jj++){
			
				for (kk=0;kk<4;kk++){
					
					
					//CONDITIONS THAT IN BLOCK!
					var con1=(	blocksy[jj][kk][1]<y && y<blocksy[jj][kk][4]);
					
					var conl1=y>((blocksy[jj][kk][0]-blocksy[jj][kk][1])/(blocksx[jj][kk][0]-blocksx[jj][kk][1])*(x-blocksx[jj][kk][0])+blocksy[jj][kk][0]);
					var conl2=y>((blocksy[jj][kk][2]-blocksy[jj][kk][3])/(blocksx[jj][kk][2]-blocksx[jj][kk][3])*(x-blocksx[jj][kk][2])+blocksy[jj][kk][2]);
					var conditionTopLines=conl1 && conl2;
					//console.log(conditionTopLines);
					
					var conl3=y<((blocksy[jj][kk][3]-blocksy[jj][kk][4])/(blocksx[jj][kk][3]-blocksx[jj][kk][4])*(x-blocksx[jj][kk][3])+blocksy[jj][kk][3]);
					var conl4=y<((blocksy[jj][kk][0]-blocksy[jj][kk][5])/(blocksx[jj][kk][0]-blocksx[jj][kk][5])*(x-blocksx[jj][kk][0])+blocksy[jj][kk][0]);
					var conditionBottomLines=conl3 && conl4;
					//console.log(conditionBottomLines);
					
					var theCondition=con1 && conditionTopLines && conditionBottomLines;
					//console.log(theCondition);
					if ( theCondition ){
								
						yx=jj;
						yy=kk;
								
					}
				}
						
			}
					
			if (yx!='na' && yy!='na' && redBlocks[yx][yy]==0 && blueBlocks[yx][yy]==0 && blackBlocks[yx][yy]==0){
				fillBlock(yx,yy,'rgb(255,255,0)');
				canvasGB.removeEventListener('click',yellowBlock);
				qs.parentNode.removeChild(qs);
				randomQuestion(yx);
		
			}
					
		}
		
		
		function makeLogo(){
			document.body.appendChild(logobtnHolder);
			document.body.appendChild(logo);
			//document.body.appendChild(dummies);
			
			
			
			infoBtn=document.getElementById('more info button');
			setupBtn=document.getElementById('set up button');
			
			/*infoBtn.addEventListener('click',function(e){
				//follow link here 
				window.open("https://algebraiccafe.wordpress.com/2019/06/12/math-blockbusters-a-web-based-game-for-the-classroom/"); 
			}*/
				//);
			setupBtn.addEventListener('click',setupClicked);
			
			
			canvasL=document.getElementById('myCanvas');
			widthL = canvasL.width=w-14.00000001;
			heightL = canvasL.height=2*(w/3)/1.5;
			ctxL = canvasL.getContext('2d');
			
			
			//DRAW ONCE LOADED
			if (logoLoaded==0){
			image.onload=function(){
				ctxL.drawImage(image,w/3.5,0,w/2.5,(w/2.5));
				logoLoaded=1;
			}
			}
			else
			{

				ctxL.drawImage(image,w/6,0,2*w/3,2*(w/3)/1.5);				
				
			}
		}
		
		
		function setupClicked(e){
		//go into set up
			
			
			// UNLOAD LOGO SCREEN
				//dummies.parentNode.removeChild(dummies);
				logo.parentNode.removeChild(logo);
				logobtnHolder.parentNode.removeChild(logobtnHolder);
				
				inLogo=0;
				inSetUp=1;
				
				// LOAD SET UP SCREEN 
				makeSetUp();
				
				
				
				
				//PLAY GAME
				//startRound();
			
			setupBtn.removeEventListener('click',setupClicked);
			//console.log('worked');
		}

		
		function drawBlock(a,b){
			ctxGB.beginPath();
			var t=(w-8.96*tops)/2;
			var startevenx=t+(tops+sideskip)*a;
			var starteveny=(15+downskip)+b*2*downskip;
			var startoddx=t+sideskip+tops+(sideskip+tops)*(a-1);
			var startoddy=(15+2*downskip)+b*2*downskip;
			if (a%2==0){
				ctxGB.moveTo(startevenx,starteveny);
				ctxGB.lineTo(startevenx+sideskip,starteveny-downskip);
				ctxGB.lineTo(startevenx+sideskip+tops,starteveny-downskip);
				ctxGB.lineTo(startevenx+2*sideskip+tops,starteveny);
				ctxGB.lineTo(startevenx+sideskip+tops,starteveny+downskip);
				ctxGB.lineTo(startevenx+sideskip,starteveny+downskip);
				ctxGB.lineTo(startevenx,starteveny);
				
				//THE NEW AWESOME CONDITIONS
				blocksx[a][b][0]=startevenx;
				blocksy[a][b][0]=starteveny;
				blocksx[a][b][1]=startevenx+sideskip;
				blocksy[a][b][1]=starteveny-downskip;
				blocksx[a][b][2]=startevenx+sideskip+tops;
				blocksy[a][b][2]=starteveny-downskip;
				blocksx[a][b][3]=startevenx+2*sideskip+tops;
				blocksy[a][b][3]=starteveny;
				blocksx[a][b][4]=startevenx+sideskip+tops;
				blocksy[a][b][4]=starteveny+downskip;
				blocksx[a][b][5]=startevenx+sideskip;
				blocksy[a][b][5]=starteveny+downskip;
				
				//the rectangle conditions
				/*
				blocksx[a][b][0]=Math.ceil(startevenx+sideskip);
				blocksy[a][b][0]=Math.ceil(starteveny-downskip);
				blocksx[a][b][1]=Math.ceil(startevenx+sideskip+tops);
				blocksy[a][b][1]=Math.ceil(starteveny+downskip);
				*/
				
				var textSizer=1.5*tops/2;
				
				ctxGB.strokeStyle='black';
				ctxGB.lineWidth=1;
				ctxGB.font=textSizer+'px arial';
				if (lettersConvert[a][b]=='I'){
				ctxGB.fillText(lettersConvert[a][b],startevenx+sideskip+.5*tops-.2*textSizer,starteveny+.35*textSizer);
				}
				else{
					ctxGB.fillText(lettersConvert[a][b],startevenx+sideskip+.5*tops-.35*textSizer,starteveny+.35*textSizer);
				}
			}
			else{
				ctxGB.moveTo(startoddx,startoddy);
				ctxGB.lineTo(startoddx+sideskip,startoddy-downskip);
				ctxGB.lineTo(startoddx+sideskip+tops,startoddy-downskip);
				ctxGB.lineTo(startoddx+2*sideskip+tops,startoddy);
				ctxGB.lineTo(startoddx+sideskip+tops,startoddy+downskip);
				ctxGB.lineTo(startoddx+sideskip,startoddy+downskip);
				ctxGB.lineTo(startoddx,startoddy);
				
				
				//THE NEW CONDITIONS
				blocksx[a][b][0]=startoddx;
				blocksy[a][b][0]=startoddy;
				blocksx[a][b][1]=startoddx+sideskip;
				blocksy[a][b][1]=startoddy-downskip;
				blocksx[a][b][2]=startoddx+sideskip+tops;
				blocksy[a][b][2]=startoddy-downskip;
				blocksx[a][b][3]=startoddx+2*sideskip+tops;
				blocksy[a][b][3]=startoddy;
				blocksx[a][b][4]=startoddx+sideskip+tops;
				blocksy[a][b][4]=startoddy+downskip;
				blocksx[a][b][5]=startoddx+sideskip;
				blocksy[a][b][5]=startoddy+downskip;
				
				var textSizer=1.5*tops/2;
				
				ctxGB.strokeStyle='black';
				ctxGB.lineWidth=1;
				ctxGB.font=textSizer+'px arial';
				ctxGB.fillText(lettersConvert[a][b],startoddx+sideskip+.5*tops-.35*textSizer,startoddy+.35*textSizer);
			
				
				
				
				//THE RECTANGLE CONDITIONS
				/*
				blocksx[a][b][0]=Math.ceil(startoddx+sideskip);
				blocksy[a][b][0]=Math.ceil(startoddy-downskip);
				blocksx[a][b][1]=Math.ceil(startoddx+sideskip+tops);
				blocksy[a][b][1]=Math.ceil(startoddy+downskip);
				*/
			}
			
			
			ctxGB.stroke();
			
		}
			
		function fillBlock(a,b,color){
			ctxGB.fillStyle=color;
			ctxGB.beginPath();
			var t=(w-8.96*tops)/2;
			var startevenx=t+(tops+sideskip)*a;
			var starteveny=(15+downskip)+b*2*downskip;
			var startoddx=t+sideskip+tops+(sideskip+tops)*(a-1);
			var startoddy=(15+2*downskip)+b*2*downskip;
			if (a%2==0){
				ctxGB.moveTo(startevenx,starteveny);
				ctxGB.lineTo(startevenx+sideskip,starteveny-downskip);
				ctxGB.lineTo(startevenx+sideskip+tops,starteveny-downskip);
				ctxGB.lineTo(startevenx+2*sideskip+tops,starteveny);
				ctxGB.lineTo(startevenx+sideskip+tops,starteveny+downskip);
				ctxGB.lineTo(startevenx+sideskip,starteveny+downskip);
				ctxGB.lineTo(startevenx,starteveny);
			}
			else{
				ctxGB.moveTo(startoddx,startoddy);
				ctxGB.lineTo(startoddx+sideskip,startoddy-downskip);
				ctxGB.lineTo(startoddx+sideskip+tops,startoddy-downskip);
				ctxGB.lineTo(startoddx+2*sideskip+tops,startoddy);
				ctxGB.lineTo(startoddx+sideskip+tops,startoddy+downskip);
				ctxGB.lineTo(startoddx+sideskip,startoddy+downskip);
				ctxGB.lineTo(startoddx,startoddy);
			}
			
			
			ctxGB.fill();
			
		}
		

		function drawBlock2(a,b){
			ctxGB2.beginPath();
			var t=((w/2)-8.96*tops2)/2;
			var startevenx=t+(tops2+sideskip2)*a;
			var starteveny=(15+downskip2)+b*2*downskip2;
			var startoddx=t+sideskip2+tops2+(sideskip2+tops2)*(a-1);
			var startoddy=(15+2*downskip2)+b*2*downskip2;
			if (a%2==0){
				ctxGB2.moveTo(startevenx,starteveny);
				ctxGB2.lineTo(startevenx+sideskip2,starteveny-downskip2);
				ctxGB2.lineTo(startevenx+sideskip2+tops2,starteveny-downskip2);
				ctxGB2.lineTo(startevenx+2*sideskip2+tops2,starteveny);
				ctxGB2.lineTo(startevenx+sideskip2+tops2,starteveny+downskip2);
				ctxGB2.lineTo(startevenx+sideskip2,starteveny+downskip2);
				ctxGB2.lineTo(startevenx,starteveny);
				
			
				var textSizer=1.5*tops/4;
				
				ctxGB2.strokeStyle='black';
				ctxGB2.lineWidth=1;
				ctxGB2.font=textSizer+'px arial';
				if (lettersConvert[a][b]=='I'){
				ctxGB2.fillText(lettersConvert[a][b],startevenx+sideskip2+.5*tops2-.2*textSizer,starteveny+.35*textSizer);
				}
				else{
					ctxGB2.fillText(lettersConvert[a][b],startevenx+sideskip2+.5*tops2-.2*textSizer,starteveny+.35*textSizer);
				}
				
			}
				
				
				/*
				blocksx[a][b][0]=Math.ceil(startevenx+sideskip2);
				blocksy[a][b][0]=Math.ceil(starteveny-downskip2)+21;
				blocksx[a][b][1]=Math.ceil(startevenx+sideskip2+tops2);
				blocksy[a][b][1]=Math.ceil(starteveny+downskip2)+21;
				*/
			
			else{
				ctxGB2.moveTo(startoddx,startoddy);
				ctxGB2.lineTo(startoddx+sideskip2,startoddy-downskip2);
				ctxGB2.lineTo(startoddx+sideskip2+tops2,startoddy-downskip2);
				ctxGB2.lineTo(startoddx+2*sideskip2+tops2,startoddy);
				ctxGB2.lineTo(startoddx+sideskip2+tops2,startoddy+downskip2);
				ctxGB2.lineTo(startoddx+sideskip2,startoddy+downskip2);
				ctxGB2.lineTo(startoddx,startoddy);
				
				
				var textSizer=1.5*tops/4;
				
				ctxGB2.strokeStyle='black';
				ctxGB2.lineWidth=1;
				ctxGB2.font=textSizer+'px arial';
				
				
					ctxGB2.fillText(lettersConvert[a][b],startoddx+sideskip2+.5*tops2-.2*textSizer,startoddy+.35*textSizer);
				
			
				
				
				/*
				blocksx[a][b][0]=Math.ceil(startoddx+sideskip2);
				blocksy[a][b][0]=Math.ceil(startoddy-downskip2)+21;
				blocksx[a][b][1]=Math.ceil(startoddx+sideskip2+tops2);
				blocksy[a][b][1]=Math.ceil(startoddy+downskip2)+21;
				*/
			}
			
			
			ctxGB2.stroke();
			
		}
		
		
		
	
	function fillBlock2(a,b,color){
			ctxGB2.fillStyle=color;
			ctxGB2.beginPath();
			var t=((w/2)-8.96*tops2)/2;
			var startevenx=t+(tops2+sideskip2)*a;
			var starteveny=(15+downskip2)+b*2*downskip2;
			var startoddx=t+sideskip2+tops2+(sideskip2+tops2)*(a-1);
			var startoddy=(15+2*downskip2)+b*2*downskip2;
			if (a%2==0){
				ctxGB2.moveTo(startevenx,starteveny);
				ctxGB2.lineTo(startevenx+sideskip2,starteveny-downskip2);
				ctxGB2.lineTo(startevenx+sideskip2+tops2,starteveny-downskip2);
				ctxGB2.lineTo(startevenx+2*sideskip2+tops2,starteveny);
				ctxGB2.lineTo(startevenx+sideskip2+tops2,starteveny+downskip2);
				ctxGB2.lineTo(startevenx+sideskip2,starteveny+downskip2);
				ctxGB2.lineTo(startevenx,starteveny);
				
			
			}
			else{
				ctxGB2.moveTo(startoddx,startoddy);
				ctxGB2.lineTo(startoddx+sideskip2,startoddy-downskip2);
				ctxGB2.lineTo(startoddx+sideskip2+tops2,startoddy-downskip2);
				ctxGB2.lineTo(startoddx+2*sideskip2+tops2,startoddy);
				ctxGB2.lineTo(startoddx+sideskip2+tops2,startoddy+downskip2);
				ctxGB2.lineTo(startoddx+sideskip2,startoddy+downskip2);
				ctxGB2.lineTo(startoddx,startoddy);
				
				
				
			}
			
			
			ctxGB2.fill();
			
		}
		


		
		
		
		
		//TAKES CARE OF JOE QUESTIONS
	
		function makeJoeQuestions(s,pp){
			var fart;
			var whichQuestionAt=0;
			var needA=0;
			var needB=0;
			var needC=0;
			var needD=0;
			var needF=0;
			var qStart='';
			var qEnd='';
			var aStart='';
			var aEnd='';
			var bStart='';
			var bEnd='';
			var cStart='';
			var cEnd='';
			var dStart='';
			var dEnd='';
			var theEnd=0;
			var badF=0;
			var whatF='';
			for (fart=0;fart<s.length;fart++){
				
				if (s.substring(fart,fart+9)=='\\question'){
					if (needA==0 &&  needB==0 && needC==0 && needD==0 && needF==0){
					qStart=fart+10;
					whichQuestionAt=whichQuestionAt+1;
					needA=1;
					needB=1;
					needC=1;
					needD=1;
					needF=1;
					}
					else{
						break
					}
					
					//console.log(s.substring(fart, fart+2));
				}
				if (qStart!='' && s.substring(fart,fart+5)=='\\ansa'){
					needA=0;
					aStart=fart+6;
					qEnd=fart-1;
				}
				if (aStart!='' && s.substring(fart,fart+5)=='\\ansb'){
					aEnd=fart-1;	
					needB=0;
					bStart=fart+6;
				}
				if (aStart!='' && aEnd!=''){
					tempQuestion[1]=s.substring(aStart,aEnd);
					
					aStart='';
					aEnd='';
				}
				if (bStart!='' && s.substring(fart,fart+5)=='\\ansc'){
					bEnd=fart-1;
					needC=0;
					cStart=fart+6;
				}
				if (bStart!='' && bEnd!=''){
					
					tempQuestion[2]=s.substring(bStart,bEnd);
					bStart='';
					bEnd='';
				}
				if (cStart!='' && s.substring(fart,fart+5)=='\\ansd'){
					cEnd=fart-1;
					needD=0;
					dStart=fart+6;
				}
				if (cStart!='' && cEnd!=''){
				
					tempQuestion[3]=s.substring(cStart,cEnd);
					cStart='';
					cEnd='';
				}
				if (dStart!='' && s.substring(fart,fart+4)=='\\sol'){
					needF=0;
					dEnd=fart-1;
					var soMany=s.substring(fart+5,fart+6);
					if (soMany=='a' || soMany=='b' || soMany=='c' || soMany=='d'){
					tempQuestion[5]=s.substring(fart+5,fart+6);
					}
					else{
						badF=1;
						whatF=soMany;
					break	
					}
				}
				if (dStart!='' && dEnd!=''){
					
					tempQuestion[4]=s.substring(dStart,dEnd);
					dStart='';
					dEnd='';
					theEnd=1;
				}
				if (theEnd==1){
					if (pp=='ap'){
					apQuestions.push(tempQuestion);
					}	
					theEnd=0;
					cleanTempQuestion();
				}
				
			
				if (qStart!='' && qEnd!=''){
					tempQuestion[0]=s.substring(qStart,qEnd);
					qStart='';
					qEnd='';
					
				}
				
				
			}
			
			if (whichQuestionAt==0){
			console.log('Could not find any questions in the file you loaded make sure it is the correct file and recall that you use \\question to indicate the start of a question');	
				//userFile.value='';
				//alert(errorMessage);
				//userQuestions=[];
				//cleanTempQuestion();
				//actualPreviewInner='';
				//previewDiv.innerHTML=actualPreviewInner;
			}
			
			if (badF==1){
			consol.log('\\sol is used to indicate the correct answer to the preceding question and only looks at the next letter.\n Your next letter was: '+whatF+'\n but it must be either a, b, c, or d');
				//alertQuestionError(whichQuestionAt,errorMessage);
				//userQuestions=[];
				//cleanTempQuestion();
				//actualPreviewInner='';
				//previewDiv.innerHTML=actualPreviewInner;
			}
			
			//console.log(userQuestions);
			if (needA==1 || needB==1 || needC==1 || needD==1 || needF==1){
				actualPreviewInner='';
				previewDiv.innerHTML=actualPreviewInner;
				console.log('You may be missing \n\n Also the answers must be written IN ORDER that is \\ansa must come BEFORE \\ansb etc. \n\n And do not forget that each question must have EVERY CHOICE that is \\ansa, \\ansb, \\ansc, \\ansd, and \\sol must appear for each question');
				
			}
			//alertQuestionError(1,'this is a test');
		
			
		}
		
		
		
		
	