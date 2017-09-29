$(document).ready(function() {
	var count=0;
	$("#sAcceptance").val("");
	$("#sAcceptance").removeAttr("disabled");	
	if($("#schumermodalbutton").is(":visible")) {
		$('#pntesignclick').val("notclicked");
	} else{
		$('#pntesignclick').val("clicked");    
	}
if((typeof(onApplicationSubmit) == typeof(Function)))
	{
		onApplicationSubmit();
	}	 
	   $("#sAcceptance").click(function(e) {
		   //alert("Value:" +  document.getElementById("pntesignclick").value);
	    	 if($("#pntesignclick").val() != "clicked"){
	    	 e.preventDefault();
	    	 validatesAcceptance();
	    	 }else{
	   		 if($(this).is(":checked")) {
	   			 count= count+1;
	    	            $("#sAcceptance").val("Y");
	    	            if($('#error-message-sAcceptance').not(":visible")){
	    	    			//	console.log("error message visible");
	    	    				$('#error-message-sAcceptance').show();
	    	    			}
	   	        }else{
	   	        	
	    	        $("#sAcceptance").val("");
	   	        }
	    		 
    	 }      
	       
	    });
	   
	   $(window).click(function () {
			//console.log("form blur");
			if($('#error-message-sAcceptance').is(":visible")){
			//	console.log("error message visible");
				$('#error-message-sAcceptance').hide();
			}
			if ($("#sAcceptance").is(":checked") && $("#sAcceptance").hasClass("error")){
				$("#sAcceptance").removeClass("error");
				//console.log("remove Error");
		
			}
			if ($("#sAcceptance").not(":checked") && count >0 && $("#sAcceptance").val()==""){
				$("#sAcceptance").addClass("error");
			//	console.log("Add Error");
		
			}
	    
		});
	   $('#terms-cheerios-agree').click(function(event){
		    event.stopPropagation();
		});
     
     $('#sAuth1AddrSameAsPrimary').change(function() {
    	 
 		var addr1 = "sAuthorizedStreetAddr11";
 		var addr2;
 		var city;
 		var zip;
 		var apt;
 		var state;
 		var sSecondaryFirstName1Val;
 		var sSecondaryLastName1Val;
		var prefillstate1;
 		
 		var fname;
 		var lname;
 		var dob;
 		var dobvalue1;
 		
 		if(document.getElementById(addr1) == null) {
 			addr1 = "sOneAuthSecondaryStreetAddr1";
 			addr2 = "sOneAuthSecondaryStreetAddr2";
 			city = "sOneAuthSecondaryCity";
 			zip = "sOneAuthSecondaryZip";
 			apt = "sOneAuthSecondaryApartment";
 			state = "sOneAuthSecondaryState";
 			fname = "sSecondaryFirstName";
 			lname = "sSecondaryLastName";
 			dob = "sOneAuthSecondaryDOB";
			prefillstate1="prefillOneAuthSecondaryState";
 			
 			sSecondaryFirstName1Val = $("#sSecondaryFirstName");
 			sSecondaryLastName1Val = $("#sSecondaryLastName");
 			dobvalue1 = $("#sOneAuthSecondaryDOB");
 		}
 		else {
 			addr1 = "sAuthorizedStreetAddr11";
 			addr2 = "sAuthorizedStreetAddr21";
 			city = "sAuthorizedCity1";
 			zip = "sAuthorizedZip1";
 			apt = "sAuthorizedApartment1";
 			state = "sAuthorizedState11";
 			fname = "sSecondaryFirstName1";
 			lname = "sSecondaryLastName1";
 			dob = "sAuthorizedDOB1";
			prefillstate1="prefillState11";
 			
 			sSecondaryFirstName1Val = $("#sSecondaryFirstName1");
 			sSecondaryLastName1Val = $("#sSecondaryLastName1");
 			dobvalue1 = $("#sAuthorizedDOB1");
 		}
 		
 		 if($(this).is(":checked")) {
 			 
 			$("#sAuth1AddrSameAsPrimary").val("Y");
              
 			$('#'+addr1).val("");
 			$('#'+addr2).val("");
 			$('#'+apt).val("");
 			$('#'+city).val("");
 			$('#'+state).val("");
 			$('#'+zip).val("");
			//$('#'+prefillstate1).val("");
			
			if (document.getElementById(prefillstate1)) {
			document.getElementById(prefillstate1).value = "";
			}
              
			unSetErrorMessage(addr1+".required");
			unSetErrorMessage(addr1+".vulgarCheck");
			unSetErrorMessage(addr1+".invalidCharacters");
			removeSimplyErrors(addr1);
			
			unSetErrorMessage(addr2+".vulgarCheck");
			unSetErrorMessage(addr2+".invalid");
			removeSimplyErrors(addr2);
					
			unSetErrorMessage(apt+".vulgarCheck");
			unSetErrorMessage(apt+".invalid");
			removeSimplyErrors(apt);
			
			unSetErrorMessage(city+".required");
			unSetErrorMessage(city+".invalidCharacters");
			removeSimplyErrors(city);
			
			unSetErrorMessage(state+".required");
			unSetErrorMessage(state+".invalidCharacters");
			removeSimplyErrors(state);
			
			unSetErrorMessage(zip+".required");
			removeSimplyErrors(zip);
 			
 			unSetErrorMessage(zip+".required");
              
            $('#sAuthorizedUser1AddressSection').hide();
            
            if (sSecondaryFirstName1Val != null && sSecondaryFirstName1Val.val() != null && sSecondaryFirstName1Val.val().length == 0)
            {
            	setErrorMessage(fname+".required");
            }
            
            if (sSecondaryLastName1Val != null && sSecondaryLastName1Val.val() != null && sSecondaryLastName1Val.val().length == 0)
        	{
            	setErrorMessage(lname+".required");
        	}
            if (dobvalue1 != null && dobvalue1.val() != null && dobvalue1.val().length == 0)
        	{
            	setErrorMessage(dob+".required");
        	}
            
          }
          else
          {
        	 $("#sAuth1AddrSameAsPrimary").val("");
 		     $('#sAuthorizedUser1AddressSection').show();
 		     
 		    $('#'+addr1).val("");
 			$('#'+addr2).val("");
 			$('#'+apt).val("");
 			$('#'+city).val("");
 			$('#'+state).val("");
 			$('#'+zip).val("");
			//$('#'+prefillstate1).val("");
			if (document.getElementById(prefillstate1)) {
			document.getElementById(prefillstate1).value = "";
			}
          
 		     if ((sSecondaryFirstName1Val != null && sSecondaryFirstName1Val.val() != null && sSecondaryFirstName1Val.val().length > 0) || (sSecondaryLastName1Val != null && sSecondaryLastName1Val.val() != null && sSecondaryLastName1Val.val().length > 0) || (dobvalue1 != null && dobvalue1.val() != null && dobvalue1.val().length > 0))
 	    	 {
 				setErrorMessage(addr1+".required");
 				setErrorMessage(city+".required");
 				setErrorMessage(state+".required");
 				setErrorMessage(zip+".required");
 	    	 }
 		     if ((sSecondaryFirstName1Val != null && sSecondaryFirstName1Val.val() != null && sSecondaryFirstName1Val.val().length == 0) && (sSecondaryLastName1Val != null && sSecondaryLastName1Val.val() != null && sSecondaryLastName1Val.val().length == 0) && (dobvalue1 != null && dobvalue1.val() != null && dobvalue1.val().length == 0))
	    	 {
 		    	unSetErrorMessage(fname+".required");
 		    	unSetErrorMessage(lname+".required");
 		    	unSetErrorMessage(dob+".required");
	    	 }
          }
         
      });
      $('#sAuth2AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName2Val =  $("#sSecondaryFirstName2");
     	 var sSecondaryMiddleInitial2Val =  $("#sSecondaryMiddleInitial2");
     	 var sSecondaryLastName2Val =  $("#sSecondaryLastName2");
     	 var dobvalue2 = $("#sAuthorizedDOB2");
     	 
          if($(this).is(":checked")) {
        	  
        	  $("#sAuth2AddrSameAsPrimary").val("Y");
              
        	  $("#sAuthorizedStreetAddr12").val("");
              $("#sAuthorizedStreetAddr22").val("");
              $("#sAuthorizedApartment2").val("");
              $("#sAuthorizedCity2").val("");
              $("#sAuthorizedState12").val("");
              $("#sAuthorizedZip2").val("");
			  //$("#prefillState12").val("");
			  if (document.getElementById("prefillState12")) {
			document.getElementById("prefillState12").value = "";
			}
              
				unSetErrorMessage("sAuthorizedStreetAddr12.required");
				unSetErrorMessage("sAuthorizedStreetAddr12.vulgarCheck");
				unSetErrorMessage("sAuthorizedStreetAddr12.invalidCharacters");
				removeSimplyErrors("sAuthorizedStreetAddr12");
				
				unSetErrorMessage("sAuthorizedStreetAddr22.vulgarCheck");
				unSetErrorMessage("sAuthorizedStreetAddr22.invalid");
				removeSimplyErrors("sAuthorizedStreetAddr22");
				
				unSetErrorMessage("sAuthorizedApartment2.vulgarCheck");
				unSetErrorMessage("sAuthorizedApartment2.invalid");
				removeSimplyErrors("sAuthorizedApartment2");
				
				unSetErrorMessage("sAuthorizedCity2.required");
				unSetErrorMessage("sAuthorizedCity2.invalidCharacters");
				removeSimplyErrors("sAuthorizedCity2");
				
				unSetErrorMessage("sAuthorizedState12.required");
				unSetErrorMessage("sAuthorizedState12.invalidCharacters");
				removeSimplyErrors("sAuthorizedState12");
				
				unSetErrorMessage("sAuthorizedZip2.required");
				removeSimplyErrors("sAuthorizedZip2");
              
              $('#sAuthorizedUser2AddressSection').hide();
              
              if (sSecondaryFirstName2Val != null && sSecondaryFirstName2Val.val() != null && sSecondaryFirstName2Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName2.required");
              }
              
              if (sSecondaryLastName2Val != null && sSecondaryLastName2Val.val() != null && sSecondaryLastName2Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName2.required");
          	  }
              if (dobvalue2 != null && dobvalue2.val() != null && dobvalue2.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB2.required");
          	  }
              
          }
          else
          {
        	 $("#sAuth2AddrSameAsPrimary").val("");
        	  
 		     $('#sAuthorizedUser2AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr12").val("");
 		     $("#sAuthorizedStreetAddr22").val("");
 		     $("#sAuthorizedApartment2").val("");
 		     $("#sAuthorizedCity2").val("");
 		     $("#sAuthorizedState12").val("");
 		     $("#sAuthorizedZip2").val("");
			 //$("#prefillState12").val("");
			 if (document.getElementById("prefillState12")) {
			document.getElementById("prefillState12").value = "";
			}
          
 		     if ((sSecondaryFirstName2Val != null && sSecondaryFirstName2Val.val() !=null && sSecondaryFirstName2Val.val().length > 0) || (sSecondaryLastName2Val != null && sSecondaryLastName2Val.val() !=null && sSecondaryLastName2Val.val().length > 0) || (dobvalue2 != null && dobvalue2.val() != null && dobvalue2.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr12.required");
 		         setErrorMessage("sAuthorizedCity2.required");
 		         setErrorMessage("sAuthorizedState12.required");
 		         setErrorMessage("sAuthorizedZip2.required");
 	    	 }
 		    if ((sSecondaryFirstName2Val != null && sSecondaryFirstName2Val.val() != null && sSecondaryFirstName2Val.val().length == 0) && (sSecondaryLastName2Val != null && sSecondaryLastName2Val.val() != null && sSecondaryLastName2Val.val().length == 0) && (dobvalue2 != null && dobvalue2.val() != null && dobvalue2.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName2.required");
		    	unSetErrorMessage("sSecondaryLastName2.required");
		    	unSetErrorMessage("sAuthorizedDOB2.required");
	    	 }
          }
         
      });
      $('#sAuth3AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName3Val =  $("#sSecondaryFirstName3");
     	 var sSecondaryMiddleInitial3Val =  $("#sSecondaryMiddleInitial3");
     	 var sSecondaryLastName3Val =  $("#sSecondaryLastName3");
     	 var dobvalue3 = $("#sAuthorizedDOB3");
     	 
          if($(this).is(":checked")) {
              
        	  $("#sAuth3AddrSameAsPrimary").val("Y");
        	  
              $("#sAuthorizedStreetAddr13").val("");
              $("#sAuthorizedStreetAddr23").val("");
              $("#sAuthorizedApartment3").val("");
              $("#sAuthorizedCity3").val("");
              $("#sAuthorizedState13").val("");
              $("#sAuthorizedZip3").val("");
			  //$("#prefillState13").val("");
			  
			  if (document.getElementById("prefillState13")) {
				document.getElementById("prefillState13").value = "";
				}
              
	          	unSetErrorMessage("sAuthorizedStreetAddr13.required");
	   			unSetErrorMessage("sAuthorizedStreetAddr13.vulgarCheck");
	  			unSetErrorMessage("sAuthorizedStreetAddr13.invalidCharacters");
	  			removeSimplyErrors("sAuthorizedStreetAddr13");
	  			
	   			unSetErrorMessage("sAuthorizedStreetAddr23.vulgarCheck");
	  			unSetErrorMessage("sAuthorizedStreetAddr23.invalid");
	  			removeSimplyErrors("sAuthorizedStreetAddr23");
	  			
	  			unSetErrorMessage("sAuthorizedApartment3.vulgarCheck");
	  			unSetErrorMessage("sAuthorizedApartment3.invalid");
	  			removeSimplyErrors("sAuthorizedApartment3");
	  			
	  			unSetErrorMessage("sAuthorizedCity3.required");
	   			unSetErrorMessage("sAuthorizedCity3.invalidCharacters");
	   			removeSimplyErrors("sAuthorizedCity3");
	   			
	   			unSetErrorMessage("sAuthorizedState13.required");
	   			unSetErrorMessage("sAuthorizedState13.invalidCharacters");
	   			removeSimplyErrors("sAuthorizedState13");
	   			
	   			unSetErrorMessage("sAuthorizedZip3.required");
	   			removeSimplyErrors("sAuthorizedZip3");
              
              $('#sAuthorizedUser3AddressSection').hide();
              
              if (sSecondaryFirstName3Val != null && sSecondaryFirstName3Val.val() != null && sSecondaryFirstName3Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName3.required");
              }
              
              if (sSecondaryLastName3Val != null && sSecondaryLastName3Val.val() != null && sSecondaryLastName3Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName3.required");
          	  }
              if (dobvalue3 != null && dobvalue3.val() != null && dobvalue3.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB3.required");
          	  }
              
          }
          else
          {
         	 $("#sAuth3AddrSameAsPrimary").val("");
         	 
 		     $('#sAuthorizedUser3AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr13").val("");
 		     $("#sAuthorizedStreetAddr23").val("");
 		     $("#sAuthorizedApartment3").val("");
 		     $("#sAuthorizedCity3").val("");
 		     $("#sAuthorizedState13").val("");
 		     $("#sAuthorizedZip3").val("");
			 //$("#prefillState13").val("");
			
			if (document.getElementById("prefillState13")) {
				document.getElementById("prefillState13").value = "";
			}
		  
 		     if ((sSecondaryFirstName3Val != null && sSecondaryFirstName3Val.val() !=null && sSecondaryFirstName3Val.val().length > 0) || (sSecondaryLastName3Val != null && sSecondaryLastName3Val.val() !=null && sSecondaryLastName3Val.val().length > 0) || (dobvalue3 != null && dobvalue3.val() != null && dobvalue3.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr13.required");
 		         setErrorMessage("sAuthorizedCity3.required");
 		         setErrorMessage("sAuthorizedState13.required");
 		         setErrorMessage("sAuthorizedZip3.required");
 	    	 }
 		    if ((sSecondaryFirstName3Val != null && sSecondaryFirstName3Val.val() != null && sSecondaryFirstName3Val.val().length == 0) && (sSecondaryLastName3Val != null && sSecondaryLastName3Val.val() != null && sSecondaryLastName3Val.val().length == 0) && (dobvalue3 != null && dobvalue3.val() != null && dobvalue3.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName3.required");
		    	unSetErrorMessage("sSecondaryLastName3.required");
		    	unSetErrorMessage("sAuthorizedDOB3.required");
	    	 }
          }
         
      });
      $('#sAuth4AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName4Val =  $("#sSecondaryFirstName4");
     	 var sSecondaryMiddleInitial4Val =  $("#sSecondaryMiddleInitial4");
     	 var sSecondaryLastName4Val =  $("#sSecondaryLastName4");
     	 var dobvalue4 = $("#sAuthorizedDOB4");
     	 
          if($(this).is(":checked")) {
              
        	  $("#sAuth4AddrSameAsPrimary").val("Y");
        	  
              $("#sAuthorizedStreetAddr14").val("");
              $("#sAuthorizedStreetAddr24").val("");
              $("#sAuthorizedApartment4").val("");
              $("#sAuthorizedCity4").val("");
              $("#sAuthorizedState14").val("");
              $("#sAuthorizedZip4").val("");
              //$("#prefillState14").val("");
			  if (document.getElementById("prefillState14")) {
				document.getElementById("prefillState14").value = "";
				}
             
            unSetErrorMessage("sAuthorizedStreetAddr14.required");
   			unSetErrorMessage("sAuthorizedStreetAddr14.vulgarCheck");
  			unSetErrorMessage("sAuthorizedStreetAddr14.invalidCharacters");
  			removeSimplyErrors("sAuthorizedStreetAddr14");
  			
   			unSetErrorMessage("sAuthorizedStreetAddr24.vulgarCheck");
  			unSetErrorMessage("sAuthorizedStreetAddr24.invalid");
  			removeSimplyErrors("sAuthorizedStreetAddr24");
  			
  			unSetErrorMessage("sAuthorizedApartment4.vulgarCheck");
  			unSetErrorMessage("sAuthorizedApartment4.invalid");
  			removeSimplyErrors("sAuthorizedApartment4");
  			
  			unSetErrorMessage("sAuthorizedCity4.required");
   			unSetErrorMessage("sAuthorizedCity4.invalidCharacters");
   			removeSimplyErrors("sAuthorizedCity4");
   			
   			unSetErrorMessage("sAuthorizedState14.required");
   			unSetErrorMessage("sAuthorizedState14.invalidCharacters");
   			removeSimplyErrors("sAuthorizedState14");
   			
   			unSetErrorMessage("sAuthorizedZip4.required");
   			removeSimplyErrors("sAuthorizedZip4");
              
              $('#sAuthorizedUser4AddressSection').hide();
              
              if (sSecondaryFirstName4Val != null && sSecondaryFirstName4Val.val() != null && sSecondaryFirstName4Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName4.required");
              }
              
              if (sSecondaryLastName4Val != null && sSecondaryLastName4Val.val() != null && sSecondaryLastName4Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName4.required");
          	  }
              if (dobvalue4 != null && dobvalue4.val() != null && dobvalue4.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB4.required");
          	  }
              
          }
          else
          {
        	  $("#sAuth4AddrSameAsPrimary").val("");
        	  
 		     $('#sAuthorizedUser4AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr14").val("");
 		     $("#sAuthorizedStreetAddr24").val("");
 		     $("#sAuthorizedApartment4").val("");
 		     $("#sAuthorizedCity4").val("");
 		     $("#sAuthorizedState14").val("");
 		     $("#sAuthorizedZip4").val("");
			 //$("#prefillState14").val("");
			 if (document.getElementById("prefillState14")) {
				document.getElementById("prefillState14").value = "";
				}
          
 		     if ((sSecondaryFirstName4Val != null && sSecondaryFirstName4Val.val() !=null && sSecondaryFirstName4Val.val().length > 0) || (sSecondaryLastName4Val != null && sSecondaryLastName4Val.val() !=null && sSecondaryLastName4Val.val().length > 0) || (dobvalue4 != null && dobvalue4.val() != null && dobvalue4.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr14.required");
 		         setErrorMessage("sAuthorizedCity4.required");
 		         setErrorMessage("sAuthorizedState14.required");
 		         setErrorMessage("sAuthorizedZip4.required");
 	    	 }
 		    if ((sSecondaryFirstName4Val != null && sSecondaryFirstName4Val.val() != null && sSecondaryFirstName4Val.val().length == 0) && (sSecondaryLastName4Val != null && sSecondaryLastName4Val.val() != null && sSecondaryLastName4Val.val().length == 0) && (dobvalue4 != null && dobvalue4.val() != null && dobvalue4.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName4.required");
		    	unSetErrorMessage("sSecondaryLastName4.required");
		    	unSetErrorMessage("sAuthorizedDOB4.required");
	    	 }
          }
         
      });
 	$('#sAuth5AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName5Val =  $("#sSecondaryFirstName5");
     	 var sSecondaryMiddleInitial5Val =  $("#sSecondaryMiddleInitial5");
     	 var sSecondaryLastName5Val =  $("#sSecondaryLastName5");
     	 var dobvalue5 = $("#sAuthorizedDOB5");
     	
          if($(this).is(":checked")) {
              
        	  $("#sAuth5AddrSameAsPrimary").val("Y");
        	  
              $("#sAuthorizedStreetAddr15").val("");
              $("#sAuthorizedStreetAddr25").val("");
              $("#sAuthorizedApartment5").val("");
              $("#sAuthorizedCity5").val("");
              $("#sAuthorizedState15").val("");
              $("#sAuthorizedZip5").val("");
			  //$("#prefillState15").val("");
			  if (document.getElementById("prefillState15")) {
				document.getElementById("prefillState15").value = "";
				}
              
            unSetErrorMessage("sAuthorizedStreetAddr15.required");
 			unSetErrorMessage("sAuthorizedStreetAddr15.vulgarCheck");
			unSetErrorMessage("sAuthorizedStreetAddr15.invalidCharacters");
			removeSimplyErrors("sAuthorizedStreetAddr15");
			
 			unSetErrorMessage("sAuthorizedStreetAddr25.vulgarCheck");
			unSetErrorMessage("sAuthorizedStreetAddr25.invalid");
			removeSimplyErrors("sAuthorizedStreetAddr25");
			
			unSetErrorMessage("sAuthorizedApartment5.vulgarCheck");
			unSetErrorMessage("sAuthorizedApartment5.invalid");
			removeSimplyErrors("sAuthorizedApartment5");
			
			unSetErrorMessage("sAuthorizedCity5.required");
 			unSetErrorMessage("sAuthorizedCity5.invalidCharacters");
 			removeSimplyErrors("sAuthorizedCity5");
 			
 			unSetErrorMessage("sAuthorizedState15.required");
 			unSetErrorMessage("sAuthorizedState15.invalidCharacters");
 			removeSimplyErrors("sAuthorizedState15");
 			
 			unSetErrorMessage("sAuthorizedZip5.required");
 			removeSimplyErrors("sAuthorizedZip5");  
             
 			$('#sAuthorizedUser5AddressSection').hide();
              
              if (sSecondaryFirstName5Val != null && sSecondaryFirstName5Val.val() != null && sSecondaryFirstName5Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName5.required");
              }
              
              if (sSecondaryLastName5Val != null && sSecondaryLastName5Val.val() != null && sSecondaryLastName5Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName5.required");
          	  }
              if (dobvalue5 != null && dobvalue5.val() != null && dobvalue5.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB5.required");
          	  }
          }
          else
          {
        	 $("#sAuth5AddrSameAsPrimary").val("");
         	 
 		     $('#sAuthorizedUser5AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr15").val("");
 		     $("#sAuthorizedStreetAddr25").val("");
 		     $("#sAuthorizedApartment5").val("");
 		     $("#sAuthorizedCity5").val("");
 		     $("#sAuthorizedState15").val("");
 		     $("#sAuthorizedZip5").val("");
			 //$("#prefillState15").val("");
			 if (document.getElementById("prefillState15")) {
				document.getElementById("prefillState15").value = "";
				}
          
 		     if ((sSecondaryFirstName5Val != null && sSecondaryFirstName5Val.val() !=null && sSecondaryFirstName5Val.val().length > 0) || (sSecondaryLastName5Val != null && sSecondaryLastName5Val.val() !=null && sSecondaryLastName5Val.val().length > 0) || (dobvalue5 != null && dobvalue5.val() != null && dobvalue5.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr15.required");
 		         setErrorMessage("sAuthorizedCity5.required");
 		         setErrorMessage("sAuthorizedState15.required");
 		         setErrorMessage("sAuthorizedZip5.required");
 	    	 }
 		    if ((sSecondaryFirstName5Val != null && sSecondaryFirstName5Val.val() != null && sSecondaryFirstName5Val.val().length == 0) && (sSecondaryLastName5Val != null && sSecondaryLastName5Val.val() != null && sSecondaryLastName5Val.val().length == 0) && (dobvalue5 != null && dobvalue5.val() != null && dobvalue5.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName5.required");
		    	unSetErrorMessage("sSecondaryLastName5.required");
		    	unSetErrorMessage("sAuthorizedDOB5.required");
	    	 }
          }
         
      });
     $("input:checkbox[name='accountType']").change(function() {
  	    var checkedVals = [];
  	    var count=0;
		$("input:checkbox[name='accountType']:checked").each(function() {
   			 checkedVals.push(this.value);
   			 count++;
			});
			if(count > 0 ){
				if(count > 1){
					$("#sAccountType").val("Both");
				}else {
					$("#sAccountType").val(checkedVals);
				}				
			}else{
				$("#sAccountType").val("None");
			}
			
       }); 
        $("#schumermodalbutton").click(function() {
      	 $('.jpui-schumer-table').scrollTop(0);

        });
        var isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod|iOS|Android|webOS|Fennec|Symbian|Windows Phone OS|Windows[ ]?CE|Device Software|Tablet OS|PalmOS|Opera Mini/i);	
        if (isMobileDevice) {
        	$("input[onclick='printpage()']").hide();
        	$("input[onclick='printpage()']").attr('tabindex', 0);
        }
        else{
        	$("input[onclick='printpage()']").attr('style', 'padding: 0; height:30px; width:60%; !important;');		
        }
        var strAgent = navigator.userAgent;
    	var browserChannelID = ContainsMobileDevice(strAgent) && !ContainsNonMobileDevice(strAgent);
    	document.getElementById("browserChannelID").value = browserChannelID;
    	if(!ContainsMobileDevice(strAgent)&& isMobileDevice !="iPad"){
    	       $("#banker_sec").show();
    	     }else{
    	     $("#banker_sec").hide();
    	     $("div").removeClass("jpui-banker-top");
    	     }
});

function sameAsPrimaryAddress(obj){
	var objectID = obj.id;
		
	var index = objectID.charAt(5);
	var divId = "sAuthorizedUser"+index+"AddressSection";
	
	var addr1 = "sAuthorizedStreetAddr1"+index;
	var addr2;
	var city;
	var zip;
	var apt;
	var state;
	var firstname;
	var lastname;
	var fname;
	var lname;
	var dob;
	var prefillstate1;
	var dobvalue;
	
	if(document.getElementById(addr1) == null && index ==1) {
			addr1 = "sOneAuthSecondaryStreetAddr1";
			addr2 = "sOneAuthSecondaryStreetAddr2";
			city = "sOneAuthSecondaryCity";
			zip = "sOneAuthSecondaryZip";
			apt = "sOneAuthSecondaryApartment";
			state = "sOneAuthSecondaryState";
			fname = "sSecondaryFirstName";
			lname = "sSecondaryLastName";
			dob = "sOneAuthSecondaryDOB";
			prefillstate1="prefillOneAuthSecondaryState";
			firstname = $("#sSecondaryFirstName");
			lastname = $("#sSecondaryLastName");
			dobvalue=$("#sOneAuthSecondaryDOB");
			
		} else {
			addr1 = "sAuthorizedStreetAddr1"+index;
			addr2 = "sAuthorizedStreetAddr2"+index;
			city = "sAuthorizedCity"+index;
			zip = "sAuthorizedZip"+index;
			apt = "sAuthorizedApartment"+index;
			state = "sAuthorizedState1"+index;
			fname = "sSecondaryFirstName"+index;
			lname = "sSecondaryLastName"+index;
			dob = "sAuthorizedDOB"+index;
			prefillstate1="prefillstate1"+index;
			firstname = $("#sSecondaryFirstName" + index);
			lastname = $("#sSecondaryLastName" + index);
			dobvalue = $("#sAuthorizedDOB" + index);
		}
	
	if (obj.checked) {
		
		document.getElementById(obj.id).value="Y";
		document.getElementById(addr1).value = "";
		document.getElementById(addr2).value = "";
		document.getElementById(city).value = "";
		document.getElementById(zip).value = "";
		document.getElementById(apt).value = "";

		if (document.getElementById(prefillstate1)) {
			document.getElementById(prefillstate1).value = "";
		}
		
		document.getElementById(state).selectedIndex = 0;
		$('#'+divId).hide();
		
		if (firstname != null && firstname.val() != null && firstname.val().length == 0)
		{
			setErrorMessage(fname+".required");
		}
		if (lastname != null && lastname.val() != null && lastname.val().length == 0)
		{
			setErrorMessage(lname+".required");
		}
		if (dobvalue != null && dobvalue.val() != null && dobvalue.val().length == 0)
		{
			setErrorMessage(dob+".required");
		}

		unSetErrorMessage(addr1+".required");
		unSetErrorMessage(addr1+".vulgarCheck");
		unSetErrorMessage(addr1+".invalidCharacters");
		removeSimplyErrors(addr1);
		
		unSetErrorMessage(addr2+".vulgarCheck");
		unSetErrorMessage(addr2+".invalid");
		removeSimplyErrors(addr2);
				
		unSetErrorMessage(apt+".vulgarCheck");
		unSetErrorMessage(apt+".invalid");
		removeSimplyErrors(apt);
		
		unSetErrorMessage(city+".required");
		unSetErrorMessage(city+".invalidCharacters");
		removeSimplyErrors(city);
		
		unSetErrorMessage(state+".required");
		unSetErrorMessage(state+".invalidCharacters");
		removeSimplyErrors(state);
		
		unSetErrorMessage(zip+".required");
		removeSimplyErrors(zip);
	} else {
		document.getElementById(obj.id).value='';
		$('#'+divId).show();
		if ((firstname != null && firstname.val() != null && firstname.val().length > 0) || (lastname != null && lastname.val() != null && lastname.val().length > 0) || (dobvalue != null && dobvalue.val() != null && dobvalue.val().length > 0))
		{
			if ($('#'+ addr1).val() == 0)
			{
				setErrorMessage(addr1+".required");
			}
			if ($('#'+ city).val() == 0)
			{
				setErrorMessage(city+".required");
			}
			if ($('#'+ state).val() == 0)
			{
				setErrorMessage(state+".required");
			}
			if ($('#'+ zip).val() == 0)
			{
				setErrorMessage(zip+".required");
			}
		}
		
		if ((firstname != null && firstname.val() != null && firstname.val().length == 0) && (lastname != null && lastname.val() != null && lastname.val().length == 0) && (dobvalue != null && dobvalue.val() != null && dobvalue.val().length == 0))
		 {
			unSetErrorMessage(fname+".required");
			unSetErrorMessage(lname+".required");
			unSetErrorMessage(dob+".required");
		 }
		
	}

}

function setPntEsignClick(){
	$('#pntesignclick').val('clicked');	
}

$(document).ready(function() {
	// This will update page level error message on review section when we click on Submit button. More details in Jira# CO-4651.
	$('#flexappsubmit').click(function(){
		var $step = $("#step4"),
		$errorMessagePanel = $step.find("div.error-message-panel");
		$errorMessagePanel.children("span").html("Please complete these fields to continue to the next step and review the 'E-Sign Disclosure' and 'Pricing & Terms' below in order to submit your application.");
	});
	
		
});

//Make pre-filled fields editable for app id 2 and 3 - CWO 2612
$(document).ready(function() {
    var mandatoryFlds = ["#sFirstName", "#sLastName", "#sStreetAddr1", "#sCity", "#sState1", "#sStreet1", "#sCity1", "#sState", "#sZip"];
    var appTypeId = 0;
if($("#appTypeId").val()){
        appTypeId = $("#appTypeId").val();
}
    for(var i = 0; i < mandatoryFlds.length ; i++){  
                    if((appTypeId == 2 || appTypeId == 3) && $(mandatoryFlds[i]).val() == ""){
$(mandatoryFlds[i]).removeAttr('readonly');
$(mandatoryFlds[i]).removeAttr('disabled');
                    }
    }
});



// below is the session maintain js
$(document).ready(function() {
	var count=0;
	$("#sAcceptance").val("");
	$("#sAcceptance").removeAttr("disabled");	
	if($("#schumermodalbutton").is(":visible")) {
		$('#pntesignclick').val("notclicked");
	} else{
		$('#pntesignclick').val("clicked");    
	}
if((typeof(onApplicationSubmit) == typeof(Function)))
	{
		onApplicationSubmit();
	}	 
	   $("#sAcceptance").click(function(e) {
		   //alert("Value:" +  document.getElementById("pntesignclick").value);
	    	 if($("#pntesignclick").val() != "clicked"){
	    	 e.preventDefault();
	    	 validatesAcceptance();
	    	 }else{
	   		 if($(this).is(":checked")) {
	   			 count= count+1;
	    	            $("#sAcceptance").val("Y");
	    	            if($('#error-message-sAcceptance').not(":visible")){
	    	    			//	console.log("error message visible");
	    	    				$('#error-message-sAcceptance').show();
	    	    			}
	   	        }else{
	   	        	
	    	        $("#sAcceptance").val("");
	   	        }
	    		 
    	 }      
	       
	    });
	   
	   $(window).click(function () {
			//console.log("form blur");
			if($('#error-message-sAcceptance').is(":visible")){
			//	console.log("error message visible");
				$('#error-message-sAcceptance').hide();
			}
			if ($("#sAcceptance").is(":checked") && $("#sAcceptance").hasClass("error")){
				$("#sAcceptance").removeClass("error");
				//console.log("remove Error");
		
			}
			if ($("#sAcceptance").not(":checked") && count >0 && $("#sAcceptance").val()==""){
				$("#sAcceptance").addClass("error");
			//	console.log("Add Error");
		
			}
	    
		});
	   $('#terms-cheerios-agree').click(function(event){
		    event.stopPropagation();
		});
     
     $('#sAuth1AddrSameAsPrimary').change(function() {
    	 
 		var addr1 = "sAuthorizedStreetAddr11";
 		var addr2;
 		var city;
 		var zip;
 		var apt;
 		var state;
 		var sSecondaryFirstName1Val;
 		var sSecondaryLastName1Val;
		var prefillstate1;
 		
 		var fname;
 		var lname;
 		var dob;
 		var dobvalue1;
 		
 		if(document.getElementById(addr1) == null) {
 			addr1 = "sOneAuthSecondaryStreetAddr1";
 			addr2 = "sOneAuthSecondaryStreetAddr2";
 			city = "sOneAuthSecondaryCity";
 			zip = "sOneAuthSecondaryZip";
 			apt = "sOneAuthSecondaryApartment";
 			state = "sOneAuthSecondaryState";
 			fname = "sSecondaryFirstName";
 			lname = "sSecondaryLastName";
 			dob = "sOneAuthSecondaryDOB";
			prefillstate1="prefillOneAuthSecondaryState";
 			
 			sSecondaryFirstName1Val = $("#sSecondaryFirstName");
 			sSecondaryLastName1Val = $("#sSecondaryLastName");
 			dobvalue1 = $("#sOneAuthSecondaryDOB");
 		}
 		else {
 			addr1 = "sAuthorizedStreetAddr11";
 			addr2 = "sAuthorizedStreetAddr21";
 			city = "sAuthorizedCity1";
 			zip = "sAuthorizedZip1";
 			apt = "sAuthorizedApartment1";
 			state = "sAuthorizedState11";
 			fname = "sSecondaryFirstName1";
 			lname = "sSecondaryLastName1";
 			dob = "sAuthorizedDOB1";
			prefillstate1="prefillState11";
 			
 			sSecondaryFirstName1Val = $("#sSecondaryFirstName1");
 			sSecondaryLastName1Val = $("#sSecondaryLastName1");
 			dobvalue1 = $("#sAuthorizedDOB1");
 		}
 		
 		 if($(this).is(":checked")) {
 			 
 			$("#sAuth1AddrSameAsPrimary").val("Y");
              
 			$('#'+addr1).val("");
 			$('#'+addr2).val("");
 			$('#'+apt).val("");
 			$('#'+city).val("");
 			$('#'+state).val("");
 			$('#'+zip).val("");
			//$('#'+prefillstate1).val("");
			
			if (document.getElementById(prefillstate1)) {
			document.getElementById(prefillstate1).value = "";
			}
              
			unSetErrorMessage(addr1+".required");
			unSetErrorMessage(addr1+".vulgarCheck");
			unSetErrorMessage(addr1+".invalidCharacters");
			removeSimplyErrors(addr1);
			
			unSetErrorMessage(addr2+".vulgarCheck");
			unSetErrorMessage(addr2+".invalid");
			removeSimplyErrors(addr2);
					
			unSetErrorMessage(apt+".vulgarCheck");
			unSetErrorMessage(apt+".invalid");
			removeSimplyErrors(apt);
			
			unSetErrorMessage(city+".required");
			unSetErrorMessage(city+".invalidCharacters");
			removeSimplyErrors(city);
			
			unSetErrorMessage(state+".required");
			unSetErrorMessage(state+".invalidCharacters");
			removeSimplyErrors(state);
			
			unSetErrorMessage(zip+".required");
			removeSimplyErrors(zip);
 			
 			unSetErrorMessage(zip+".required");
              
            $('#sAuthorizedUser1AddressSection').hide();
            
            if (sSecondaryFirstName1Val != null && sSecondaryFirstName1Val.val() != null && sSecondaryFirstName1Val.val().length == 0)
            {
            	setErrorMessage(fname+".required");
            }
            
            if (sSecondaryLastName1Val != null && sSecondaryLastName1Val.val() != null && sSecondaryLastName1Val.val().length == 0)
        	{
            	setErrorMessage(lname+".required");
        	}
            if (dobvalue1 != null && dobvalue1.val() != null && dobvalue1.val().length == 0)
        	{
            	setErrorMessage(dob+".required");
        	}
            
          }
          else
          {
        	 $("#sAuth1AddrSameAsPrimary").val("");
 		     $('#sAuthorizedUser1AddressSection').show();
 		     
 		    $('#'+addr1).val("");
 			$('#'+addr2).val("");
 			$('#'+apt).val("");
 			$('#'+city).val("");
 			$('#'+state).val("");
 			$('#'+zip).val("");
			//$('#'+prefillstate1).val("");
			if (document.getElementById(prefillstate1)) {
			document.getElementById(prefillstate1).value = "";
			}
          
 		     if ((sSecondaryFirstName1Val != null && sSecondaryFirstName1Val.val() != null && sSecondaryFirstName1Val.val().length > 0) || (sSecondaryLastName1Val != null && sSecondaryLastName1Val.val() != null && sSecondaryLastName1Val.val().length > 0) || (dobvalue1 != null && dobvalue1.val() != null && dobvalue1.val().length > 0))
 	    	 {
 				setErrorMessage(addr1+".required");
 				setErrorMessage(city+".required");
 				setErrorMessage(state+".required");
 				setErrorMessage(zip+".required");
 	    	 }
 		     if ((sSecondaryFirstName1Val != null && sSecondaryFirstName1Val.val() != null && sSecondaryFirstName1Val.val().length == 0) && (sSecondaryLastName1Val != null && sSecondaryLastName1Val.val() != null && sSecondaryLastName1Val.val().length == 0) && (dobvalue1 != null && dobvalue1.val() != null && dobvalue1.val().length == 0))
	    	 {
 		    	unSetErrorMessage(fname+".required");
 		    	unSetErrorMessage(lname+".required");
 		    	unSetErrorMessage(dob+".required");
	    	 }
          }
         
      });
      $('#sAuth2AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName2Val =  $("#sSecondaryFirstName2");
     	 var sSecondaryMiddleInitial2Val =  $("#sSecondaryMiddleInitial2");
     	 var sSecondaryLastName2Val =  $("#sSecondaryLastName2");
     	 var dobvalue2 = $("#sAuthorizedDOB2");
     	 
          if($(this).is(":checked")) {
        	  
        	  $("#sAuth2AddrSameAsPrimary").val("Y");
              
        	  $("#sAuthorizedStreetAddr12").val("");
              $("#sAuthorizedStreetAddr22").val("");
              $("#sAuthorizedApartment2").val("");
              $("#sAuthorizedCity2").val("");
              $("#sAuthorizedState12").val("");
              $("#sAuthorizedZip2").val("");
			  //$("#prefillState12").val("");
			  if (document.getElementById("prefillState12")) {
			document.getElementById("prefillState12").value = "";
			}
              
				unSetErrorMessage("sAuthorizedStreetAddr12.required");
				unSetErrorMessage("sAuthorizedStreetAddr12.vulgarCheck");
				unSetErrorMessage("sAuthorizedStreetAddr12.invalidCharacters");
				removeSimplyErrors("sAuthorizedStreetAddr12");
				
				unSetErrorMessage("sAuthorizedStreetAddr22.vulgarCheck");
				unSetErrorMessage("sAuthorizedStreetAddr22.invalid");
				removeSimplyErrors("sAuthorizedStreetAddr22");
				
				unSetErrorMessage("sAuthorizedApartment2.vulgarCheck");
				unSetErrorMessage("sAuthorizedApartment2.invalid");
				removeSimplyErrors("sAuthorizedApartment2");
				
				unSetErrorMessage("sAuthorizedCity2.required");
				unSetErrorMessage("sAuthorizedCity2.invalidCharacters");
				removeSimplyErrors("sAuthorizedCity2");
				
				unSetErrorMessage("sAuthorizedState12.required");
				unSetErrorMessage("sAuthorizedState12.invalidCharacters");
				removeSimplyErrors("sAuthorizedState12");
				
				unSetErrorMessage("sAuthorizedZip2.required");
				removeSimplyErrors("sAuthorizedZip2");
              
              $('#sAuthorizedUser2AddressSection').hide();
              
              if (sSecondaryFirstName2Val != null && sSecondaryFirstName2Val.val() != null && sSecondaryFirstName2Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName2.required");
              }
              
              if (sSecondaryLastName2Val != null && sSecondaryLastName2Val.val() != null && sSecondaryLastName2Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName2.required");
          	  }
              if (dobvalue2 != null && dobvalue2.val() != null && dobvalue2.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB2.required");
          	  }
              
          }
          else
          {
        	 $("#sAuth2AddrSameAsPrimary").val("");
        	  
 		     $('#sAuthorizedUser2AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr12").val("");
 		     $("#sAuthorizedStreetAddr22").val("");
 		     $("#sAuthorizedApartment2").val("");
 		     $("#sAuthorizedCity2").val("");
 		     $("#sAuthorizedState12").val("");
 		     $("#sAuthorizedZip2").val("");
			 //$("#prefillState12").val("");
			 if (document.getElementById("prefillState12")) {
			document.getElementById("prefillState12").value = "";
			}
          
 		     if ((sSecondaryFirstName2Val != null && sSecondaryFirstName2Val.val() !=null && sSecondaryFirstName2Val.val().length > 0) || (sSecondaryLastName2Val != null && sSecondaryLastName2Val.val() !=null && sSecondaryLastName2Val.val().length > 0) || (dobvalue2 != null && dobvalue2.val() != null && dobvalue2.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr12.required");
 		         setErrorMessage("sAuthorizedCity2.required");
 		         setErrorMessage("sAuthorizedState12.required");
 		         setErrorMessage("sAuthorizedZip2.required");
 	    	 }
 		    if ((sSecondaryFirstName2Val != null && sSecondaryFirstName2Val.val() != null && sSecondaryFirstName2Val.val().length == 0) && (sSecondaryLastName2Val != null && sSecondaryLastName2Val.val() != null && sSecondaryLastName2Val.val().length == 0) && (dobvalue2 != null && dobvalue2.val() != null && dobvalue2.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName2.required");
		    	unSetErrorMessage("sSecondaryLastName2.required");
		    	unSetErrorMessage("sAuthorizedDOB2.required");
	    	 }
          }
         
      });
      $('#sAuth3AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName3Val =  $("#sSecondaryFirstName3");
     	 var sSecondaryMiddleInitial3Val =  $("#sSecondaryMiddleInitial3");
     	 var sSecondaryLastName3Val =  $("#sSecondaryLastName3");
     	 var dobvalue3 = $("#sAuthorizedDOB3");
     	 
          if($(this).is(":checked")) {
              
        	  $("#sAuth3AddrSameAsPrimary").val("Y");
        	  
              $("#sAuthorizedStreetAddr13").val("");
              $("#sAuthorizedStreetAddr23").val("");
              $("#sAuthorizedApartment3").val("");
              $("#sAuthorizedCity3").val("");
              $("#sAuthorizedState13").val("");
              $("#sAuthorizedZip3").val("");
			  //$("#prefillState13").val("");
			  
			  if (document.getElementById("prefillState13")) {
				document.getElementById("prefillState13").value = "";
				}
              
	          	unSetErrorMessage("sAuthorizedStreetAddr13.required");
	   			unSetErrorMessage("sAuthorizedStreetAddr13.vulgarCheck");
	  			unSetErrorMessage("sAuthorizedStreetAddr13.invalidCharacters");
	  			removeSimplyErrors("sAuthorizedStreetAddr13");
	  			
	   			unSetErrorMessage("sAuthorizedStreetAddr23.vulgarCheck");
	  			unSetErrorMessage("sAuthorizedStreetAddr23.invalid");
	  			removeSimplyErrors("sAuthorizedStreetAddr23");
	  			
	  			unSetErrorMessage("sAuthorizedApartment3.vulgarCheck");
	  			unSetErrorMessage("sAuthorizedApartment3.invalid");
	  			removeSimplyErrors("sAuthorizedApartment3");
	  			
	  			unSetErrorMessage("sAuthorizedCity3.required");
	   			unSetErrorMessage("sAuthorizedCity3.invalidCharacters");
	   			removeSimplyErrors("sAuthorizedCity3");
	   			
	   			unSetErrorMessage("sAuthorizedState13.required");
	   			unSetErrorMessage("sAuthorizedState13.invalidCharacters");
	   			removeSimplyErrors("sAuthorizedState13");
	   			
	   			unSetErrorMessage("sAuthorizedZip3.required");
	   			removeSimplyErrors("sAuthorizedZip3");
              
              $('#sAuthorizedUser3AddressSection').hide();
              
              if (sSecondaryFirstName3Val != null && sSecondaryFirstName3Val.val() != null && sSecondaryFirstName3Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName3.required");
              }
              
              if (sSecondaryLastName3Val != null && sSecondaryLastName3Val.val() != null && sSecondaryLastName3Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName3.required");
          	  }
              if (dobvalue3 != null && dobvalue3.val() != null && dobvalue3.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB3.required");
          	  }
              
          }
          else
          {
         	 $("#sAuth3AddrSameAsPrimary").val("");
         	 
 		     $('#sAuthorizedUser3AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr13").val("");
 		     $("#sAuthorizedStreetAddr23").val("");
 		     $("#sAuthorizedApartment3").val("");
 		     $("#sAuthorizedCity3").val("");
 		     $("#sAuthorizedState13").val("");
 		     $("#sAuthorizedZip3").val("");
			 //$("#prefillState13").val("");
			
			if (document.getElementById("prefillState13")) {
				document.getElementById("prefillState13").value = "";
			}
		  
 		     if ((sSecondaryFirstName3Val != null && sSecondaryFirstName3Val.val() !=null && sSecondaryFirstName3Val.val().length > 0) || (sSecondaryLastName3Val != null && sSecondaryLastName3Val.val() !=null && sSecondaryLastName3Val.val().length > 0) || (dobvalue3 != null && dobvalue3.val() != null && dobvalue3.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr13.required");
 		         setErrorMessage("sAuthorizedCity3.required");
 		         setErrorMessage("sAuthorizedState13.required");
 		         setErrorMessage("sAuthorizedZip3.required");
 	    	 }
 		    if ((sSecondaryFirstName3Val != null && sSecondaryFirstName3Val.val() != null && sSecondaryFirstName3Val.val().length == 0) && (sSecondaryLastName3Val != null && sSecondaryLastName3Val.val() != null && sSecondaryLastName3Val.val().length == 0) && (dobvalue3 != null && dobvalue3.val() != null && dobvalue3.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName3.required");
		    	unSetErrorMessage("sSecondaryLastName3.required");
		    	unSetErrorMessage("sAuthorizedDOB3.required");
	    	 }
          }
         
      });
      $('#sAuth4AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName4Val =  $("#sSecondaryFirstName4");
     	 var sSecondaryMiddleInitial4Val =  $("#sSecondaryMiddleInitial4");
     	 var sSecondaryLastName4Val =  $("#sSecondaryLastName4");
     	 var dobvalue4 = $("#sAuthorizedDOB4");
     	 
          if($(this).is(":checked")) {
              
        	  $("#sAuth4AddrSameAsPrimary").val("Y");
        	  
              $("#sAuthorizedStreetAddr14").val("");
              $("#sAuthorizedStreetAddr24").val("");
              $("#sAuthorizedApartment4").val("");
              $("#sAuthorizedCity4").val("");
              $("#sAuthorizedState14").val("");
              $("#sAuthorizedZip4").val("");
              //$("#prefillState14").val("");
			  if (document.getElementById("prefillState14")) {
				document.getElementById("prefillState14").value = "";
				}
             
            unSetErrorMessage("sAuthorizedStreetAddr14.required");
   			unSetErrorMessage("sAuthorizedStreetAddr14.vulgarCheck");
  			unSetErrorMessage("sAuthorizedStreetAddr14.invalidCharacters");
  			removeSimplyErrors("sAuthorizedStreetAddr14");
  			
   			unSetErrorMessage("sAuthorizedStreetAddr24.vulgarCheck");
  			unSetErrorMessage("sAuthorizedStreetAddr24.invalid");
  			removeSimplyErrors("sAuthorizedStreetAddr24");
  			
  			unSetErrorMessage("sAuthorizedApartment4.vulgarCheck");
  			unSetErrorMessage("sAuthorizedApartment4.invalid");
  			removeSimplyErrors("sAuthorizedApartment4");
  			
  			unSetErrorMessage("sAuthorizedCity4.required");
   			unSetErrorMessage("sAuthorizedCity4.invalidCharacters");
   			removeSimplyErrors("sAuthorizedCity4");
   			
   			unSetErrorMessage("sAuthorizedState14.required");
   			unSetErrorMessage("sAuthorizedState14.invalidCharacters");
   			removeSimplyErrors("sAuthorizedState14");
   			
   			unSetErrorMessage("sAuthorizedZip4.required");
   			removeSimplyErrors("sAuthorizedZip4");
              
              $('#sAuthorizedUser4AddressSection').hide();
              
              if (sSecondaryFirstName4Val != null && sSecondaryFirstName4Val.val() != null && sSecondaryFirstName4Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName4.required");
              }
              
              if (sSecondaryLastName4Val != null && sSecondaryLastName4Val.val() != null && sSecondaryLastName4Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName4.required");
          	  }
              if (dobvalue4 != null && dobvalue4.val() != null && dobvalue4.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB4.required");
          	  }
              
          }
          else
          {
        	  $("#sAuth4AddrSameAsPrimary").val("");
        	  
 		     $('#sAuthorizedUser4AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr14").val("");
 		     $("#sAuthorizedStreetAddr24").val("");
 		     $("#sAuthorizedApartment4").val("");
 		     $("#sAuthorizedCity4").val("");
 		     $("#sAuthorizedState14").val("");
 		     $("#sAuthorizedZip4").val("");
			 //$("#prefillState14").val("");
			 if (document.getElementById("prefillState14")) {
				document.getElementById("prefillState14").value = "";
				}
          
 		     if ((sSecondaryFirstName4Val != null && sSecondaryFirstName4Val.val() !=null && sSecondaryFirstName4Val.val().length > 0) || (sSecondaryLastName4Val != null && sSecondaryLastName4Val.val() !=null && sSecondaryLastName4Val.val().length > 0) || (dobvalue4 != null && dobvalue4.val() != null && dobvalue4.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr14.required");
 		         setErrorMessage("sAuthorizedCity4.required");
 		         setErrorMessage("sAuthorizedState14.required");
 		         setErrorMessage("sAuthorizedZip4.required");
 	    	 }
 		    if ((sSecondaryFirstName4Val != null && sSecondaryFirstName4Val.val() != null && sSecondaryFirstName4Val.val().length == 0) && (sSecondaryLastName4Val != null && sSecondaryLastName4Val.val() != null && sSecondaryLastName4Val.val().length == 0) && (dobvalue4 != null && dobvalue4.val() != null && dobvalue4.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName4.required");
		    	unSetErrorMessage("sSecondaryLastName4.required");
		    	unSetErrorMessage("sAuthorizedDOB4.required");
	    	 }
          }
         
      });
 	$('#sAuth5AddrSameAsPrimary').change(function() {
     	 
     	 var sSecondaryFirstName5Val =  $("#sSecondaryFirstName5");
     	 var sSecondaryMiddleInitial5Val =  $("#sSecondaryMiddleInitial5");
     	 var sSecondaryLastName5Val =  $("#sSecondaryLastName5");
     	 var dobvalue5 = $("#sAuthorizedDOB5");
     	
          if($(this).is(":checked")) {
              
        	  $("#sAuth5AddrSameAsPrimary").val("Y");
        	  
              $("#sAuthorizedStreetAddr15").val("");
              $("#sAuthorizedStreetAddr25").val("");
              $("#sAuthorizedApartment5").val("");
              $("#sAuthorizedCity5").val("");
              $("#sAuthorizedState15").val("");
              $("#sAuthorizedZip5").val("");
			  //$("#prefillState15").val("");
			  if (document.getElementById("prefillState15")) {
				document.getElementById("prefillState15").value = "";
				}
              
            unSetErrorMessage("sAuthorizedStreetAddr15.required");
 			unSetErrorMessage("sAuthorizedStreetAddr15.vulgarCheck");
			unSetErrorMessage("sAuthorizedStreetAddr15.invalidCharacters");
			removeSimplyErrors("sAuthorizedStreetAddr15");
			
 			unSetErrorMessage("sAuthorizedStreetAddr25.vulgarCheck");
			unSetErrorMessage("sAuthorizedStreetAddr25.invalid");
			removeSimplyErrors("sAuthorizedStreetAddr25");
			
			unSetErrorMessage("sAuthorizedApartment5.vulgarCheck");
			unSetErrorMessage("sAuthorizedApartment5.invalid");
			removeSimplyErrors("sAuthorizedApartment5");
			
			unSetErrorMessage("sAuthorizedCity5.required");
 			unSetErrorMessage("sAuthorizedCity5.invalidCharacters");
 			removeSimplyErrors("sAuthorizedCity5");
 			
 			unSetErrorMessage("sAuthorizedState15.required");
 			unSetErrorMessage("sAuthorizedState15.invalidCharacters");
 			removeSimplyErrors("sAuthorizedState15");
 			
 			unSetErrorMessage("sAuthorizedZip5.required");
 			removeSimplyErrors("sAuthorizedZip5");  
             
 			$('#sAuthorizedUser5AddressSection').hide();
              
              if (sSecondaryFirstName5Val != null && sSecondaryFirstName5Val.val() != null && sSecondaryFirstName5Val.val().length == 0)
              {
              	setErrorMessage("sSecondaryFirstName5.required");
              }
              
              if (sSecondaryLastName5Val != null && sSecondaryLastName5Val.val() != null && sSecondaryLastName5Val.val().length == 0)
          	  {
              	setErrorMessage("sSecondaryLastName5.required");
          	  }
              if (dobvalue5 != null && dobvalue5.val() != null && dobvalue5.val().length == 0)
          	  {
              	setErrorMessage("sAuthorizedDOB5.required");
          	  }
          }
          else
          {
        	 $("#sAuth5AddrSameAsPrimary").val("");
         	 
 		     $('#sAuthorizedUser5AddressSection').show();
 		     
 		     $("#sAuthorizedStreetAddr15").val("");
 		     $("#sAuthorizedStreetAddr25").val("");
 		     $("#sAuthorizedApartment5").val("");
 		     $("#sAuthorizedCity5").val("");
 		     $("#sAuthorizedState15").val("");
 		     $("#sAuthorizedZip5").val("");
			 //$("#prefillState15").val("");
			 if (document.getElementById("prefillState15")) {
				document.getElementById("prefillState15").value = "";
				}
          
 		     if ((sSecondaryFirstName5Val != null && sSecondaryFirstName5Val.val() !=null && sSecondaryFirstName5Val.val().length > 0) || (sSecondaryLastName5Val != null && sSecondaryLastName5Val.val() !=null && sSecondaryLastName5Val.val().length > 0) || (dobvalue5 != null && dobvalue5.val() != null && dobvalue5.val().length > 0))
 	    	 {
 		    	 setErrorMessage("sAuthorizedStreetAddr15.required");
 		         setErrorMessage("sAuthorizedCity5.required");
 		         setErrorMessage("sAuthorizedState15.required");
 		         setErrorMessage("sAuthorizedZip5.required");
 	    	 }
 		    if ((sSecondaryFirstName5Val != null && sSecondaryFirstName5Val.val() != null && sSecondaryFirstName5Val.val().length == 0) && (sSecondaryLastName5Val != null && sSecondaryLastName5Val.val() != null && sSecondaryLastName5Val.val().length == 0) && (dobvalue5 != null && dobvalue5.val() != null && dobvalue5.val().length == 0))
	    	 {
		    	unSetErrorMessage("sSecondaryFirstName5.required");
		    	unSetErrorMessage("sSecondaryLastName5.required");
		    	unSetErrorMessage("sAuthorizedDOB5.required");
	    	 }
          }
         
      });
     $("input:checkbox[name='accountType']").change(function() {
  	    var checkedVals = [];
  	    var count=0;
		$("input:checkbox[name='accountType']:checked").each(function() {
   			 checkedVals.push(this.value);
   			 count++;
			});
			if(count > 0 ){
				if(count > 1){
					$("#sAccountType").val("Both");
				}else {
					$("#sAccountType").val(checkedVals);
				}				
			}else{
				$("#sAccountType").val("None");
			}
			
       }); 
        $("#schumermodalbutton").click(function() {
      	 $('.jpui-schumer-table').scrollTop(0);

        });
        var isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod|iOS|Android|webOS|Fennec|Symbian|Windows Phone OS|Windows[ ]?CE|Device Software|Tablet OS|PalmOS|Opera Mini/i);	
        if (isMobileDevice) {
        	$("input[onclick='printpage()']").hide();
        	$("input[onclick='printpage()']").attr('tabindex', 0);
        }
        else{
        	$("input[onclick='printpage()']").attr('style', 'padding: 0; height:30px; width:60%; !important;');		
        }
        var strAgent = navigator.userAgent;
    	var browserChannelID = ContainsMobileDevice(strAgent) && !ContainsNonMobileDevice(strAgent);
    	document.getElementById("browserChannelID").value = browserChannelID;
    	if(!ContainsMobileDevice(strAgent)&& isMobileDevice !="iPad"){
    	       $("#banker_sec").show();
    	     }else{
    	     $("#banker_sec").hide();
    	     $("div").removeClass("jpui-banker-top");
    	     }
});

function sameAsPrimaryAddress(obj){
	var objectID = obj.id;
		
	var index = objectID.charAt(5);
	var divId = "sAuthorizedUser"+index+"AddressSection";
	
	var addr1 = "sAuthorizedStreetAddr1"+index;
	var addr2;
	var city;
	var zip;
	var apt;
	var state;
	var firstname;
	var lastname;
	var fname;
	var lname;
	var dob;
	var prefillstate1;
	var dobvalue;
	
	if(document.getElementById(addr1) == null && index ==1) {
			addr1 = "sOneAuthSecondaryStreetAddr1";
			addr2 = "sOneAuthSecondaryStreetAddr2";
			city = "sOneAuthSecondaryCity";
			zip = "sOneAuthSecondaryZip";
			apt = "sOneAuthSecondaryApartment";
			state = "sOneAuthSecondaryState";
			fname = "sSecondaryFirstName";
			lname = "sSecondaryLastName";
			dob = "sOneAuthSecondaryDOB";
			prefillstate1="prefillOneAuthSecondaryState";
			firstname = $("#sSecondaryFirstName");
			lastname = $("#sSecondaryLastName");
			dobvalue=$("#sOneAuthSecondaryDOB");
			
		} else {
			addr1 = "sAuthorizedStreetAddr1"+index;
			addr2 = "sAuthorizedStreetAddr2"+index;
			city = "sAuthorizedCity"+index;
			zip = "sAuthorizedZip"+index;
			apt = "sAuthorizedApartment"+index;
			state = "sAuthorizedState1"+index;
			fname = "sSecondaryFirstName"+index;
			lname = "sSecondaryLastName"+index;
			dob = "sAuthorizedDOB"+index;
			prefillstate1="prefillstate1"+index;
			firstname = $("#sSecondaryFirstName" + index);
			lastname = $("#sSecondaryLastName" + index);
			dobvalue = $("#sAuthorizedDOB" + index);
		}
	
	if (obj.checked) {
		
		document.getElementById(obj.id).value="Y";
		document.getElementById(addr1).value = "";
		document.getElementById(addr2).value = "";
		document.getElementById(city).value = "";
		document.getElementById(zip).value = "";
		document.getElementById(apt).value = "";

		if (document.getElementById(prefillstate1)) {
			document.getElementById(prefillstate1).value = "";
		}
		
		document.getElementById(state).selectedIndex = 0;
		$('#'+divId).hide();
		
		if (firstname != null && firstname.val() != null && firstname.val().length == 0)
		{
			setErrorMessage(fname+".required");
		}
		if (lastname != null && lastname.val() != null && lastname.val().length == 0)
		{
			setErrorMessage(lname+".required");
		}
		if (dobvalue != null && dobvalue.val() != null && dobvalue.val().length == 0)
		{
			setErrorMessage(dob+".required");
		}

		unSetErrorMessage(addr1+".required");
		unSetErrorMessage(addr1+".vulgarCheck");
		unSetErrorMessage(addr1+".invalidCharacters");
		removeSimplyErrors(addr1);
		
		unSetErrorMessage(addr2+".vulgarCheck");
		unSetErrorMessage(addr2+".invalid");
		removeSimplyErrors(addr2);
				
		unSetErrorMessage(apt+".vulgarCheck");
		unSetErrorMessage(apt+".invalid");
		removeSimplyErrors(apt);
		
		unSetErrorMessage(city+".required");
		unSetErrorMessage(city+".invalidCharacters");
		removeSimplyErrors(city);
		
		unSetErrorMessage(state+".required");
		unSetErrorMessage(state+".invalidCharacters");
		removeSimplyErrors(state);
		
		unSetErrorMessage(zip+".required");
		removeSimplyErrors(zip);
	} else {
		document.getElementById(obj.id).value='';
		$('#'+divId).show();
		if ((firstname != null && firstname.val() != null && firstname.val().length > 0) || (lastname != null && lastname.val() != null && lastname.val().length > 0) || (dobvalue != null && dobvalue.val() != null && dobvalue.val().length > 0))
		{
			if ($('#'+ addr1).val() == 0)
			{
				setErrorMessage(addr1+".required");
			}
			if ($('#'+ city).val() == 0)
			{
				setErrorMessage(city+".required");
			}
			if ($('#'+ state).val() == 0)
			{
				setErrorMessage(state+".required");
			}
			if ($('#'+ zip).val() == 0)
			{
				setErrorMessage(zip+".required");
			}
		}
		
		if ((firstname != null && firstname.val() != null && firstname.val().length == 0) && (lastname != null && lastname.val() != null && lastname.val().length == 0) && (dobvalue != null && dobvalue.val() != null && dobvalue.val().length == 0))
		 {
			unSetErrorMessage(fname+".required");
			unSetErrorMessage(lname+".required");
			unSetErrorMessage(dob+".required");
		 }
		
	}

}

function setPntEsignClick(){
	$('#pntesignclick').val('clicked');	
}

$(document).ready(function() {
	// This will update page level error message on review section when we click on Submit button. More details in Jira# CO-4651.
	$('#flexappsubmit').click(function(){
		var $step = $("#step4"),
		$errorMessagePanel = $step.find("div.error-message-panel");
		$errorMessagePanel.children("span").html("Please complete these fields to continue to the next step and review the 'E-Sign Disclosure' and 'Pricing & Terms' below in order to submit your application.");
	});
	
		
});

//Make pre-filled fields editable for app id 2 and 3 - CWO 2612
$(document).ready(function() {
    var mandatoryFlds = ["#sFirstName", "#sLastName", "#sStreetAddr1", "#sCity", "#sState1", "#sStreet1", "#sCity1", "#sState", "#sZip"];
    var appTypeId = 0;
if($("#appTypeId").val()){
        appTypeId = $("#appTypeId").val();
}
    for(var i = 0; i < mandatoryFlds.length ; i++){  
                    if((appTypeId == 2 || appTypeId == 3) && $(mandatoryFlds[i]).val() == ""){
$(mandatoryFlds[i]).removeAttr('readonly');
$(mandatoryFlds[i]).removeAttr('disabled');
                    }
    }
});
