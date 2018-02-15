# jQuery Content Card Plugin

## Structure

    js -         
        -- jquery.contentCard.js
        -- jquery-3.3.1.js 
    css- 
        -- jquery.contentCard.css
        -- images

## Link CSS and JS 

    <script src="js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="js/jquery.contentCard.js"></script>
    <link rel="stylesheet" href="css/jquery.contentCard.css" />

## Create content cards box

    <div class="content-card-row">
        <div class="content-card-grid">            
                                
        </div>
    </div>

## Add card in content box
    
   You can add multiple card in content card box

    <div class="grid-item">
   
        // your card
        <div class="myContent" headerText="Car insurance" description="We know lots of factors go into calculating insurance costs..." iconUrl="images/car.png" bgUrl="images/insurance.jpeg"></div> 

    </div>
            
 Content Card div attributes 
   
   bgUrl => "Backgrond image URL"
    
   headerText => "Card header text" 
   
   description => "Card description"
   
   iconUrl => "Header icon URL"
    
##  Using card options and methods
   How to configure plugin options and methids, will see the details below
    
    $('.myContent').contentCard({
        editor: true, // 'false' to remove editor options
        editorPosition: 'top',
        editorOptions: {
            copy: true, // 'false' to remove copy option
            edit: true,
            delete: true,
            print: true
        },
        onEditClick: function() {                               
            alert($(this).attr('headerText')  + ' card edit click');
        },
        onCopyClick: function () {                              
            alert($(this).attr('headerText')  + ' card copy click');
        },
        onDeleteClick: function() {                               
            alert($(this).attr('headerText')  + ' card delete click');
        },
        onPrintClick: function() {                              
            alert($(this).attr('headerText')  + ' card print click');
        },
        complete : function() {                
            console.log("Card created....");
        }         
    });        
  

###  Move editor position 
  
      editorPosition: top/right/bottom/left 
  
###  Action listeners methods on editor options
   
   Copy option click listener
   
        onCopyClick: function () {                              
            alert($(this).attr('headerText')  + ' card copy click');
        },
   
   Edit option click listener
    
       onEditClick: function() {                               
           alert($(this).attr('headerText')  + ' card edit click');
       },
   
   Print option click listener
   
       onPrintClick: function() {                              
           alert($(this).attr('headerText')  + ' card print click');
       },
        
   Delete option click listener
        
       onDeleteClick: function() {                               
           alert($(this).attr('headerText')  + ' card delete click');
       },
    
