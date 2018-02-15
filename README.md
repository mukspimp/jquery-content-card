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

## Create Content cards box

    <div class="content-card-row">
        <div class="content-card-grid">            
                                
        </div>
    </div>

## Add Card in content box
    
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
    
    
    
  
