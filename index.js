c_active = 'home';
var timer;

function setActive(id){
	document.getElementById(c_active).classList.remove('text_block_active')
	document.getElementById(c_active+'X').classList.remove('active')
	c_active = id
	document.getElementById(c_active).classList.add('text_block_active')
	document.getElementById(c_active+'X').classList.add('active')
	if(id=='deli'){
		animateText();
	}else{
		if(timer){
			clearInterval(timer);
			timer=undefined;
		}
	}
}

image_links = [
"https://images.unsplash.com/photo-1631261177958-b68a44d92a56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1631298338669-7921e0c25422?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1631276893922-3de090bec61f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
]
current_image = 0;
function nextImage(){
	current_image++;
	if(current_image==image_links.length)current_image=0;
	document.getElementById('img_display').src = image_links[current_image];	
}
function previmg(){
	current_image--;
	if(current_image<0)current_image=image_links.length-1;
    document.getElementById('img_display').src = image_links[current_image];
}

text="\
Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country located in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain, bordering Tibet of China to the north, and India in the south, east, and west, while it is narrowly separated from Bangladesh by the Siliguri Corridor, and from Bhutan by the Indian state of Sikkim. Nepal has a diverse geography, including fertile plains, subalpine forested hills, and eight of the world's ten tallest mountains, including Mount Everest, the highest point on Earth. Nepal is a multi-ethnic, multi-lingual, multi-religious and multi-cultural state, with Nepali as the official language. Kathmandu is the nation's capital and the largest city.\n\
\n\
The name \"Nepal\" is first recorded in texts from the Vedic period of the Indian subcontinent, the era in ancient Nepal when Hinduism was founded, the predominant religion of the country. In the middle of the first millennium BC, Gautama Buddha, the founder of Buddhism, was born in Lumbini in southern Nepal. Parts of northern Nepal were intertwined with the culture of Tibet. The centrally located Kathmandu Valley is intertwined with the culture of Indo-Aryans, and was the seat of the prosperous Newar confederacy known as Nepal Mandala. The Himalayan branch of the ancient Silk Road was dominated by the valley's traders. The cosmopolitan region developed distinct traditional art and architecture. By the 18th century, the Gorkha Kingdom achieved the unification of Nepal. The Shah dynasty established the Kingdom of Nepal and later formed an alliance with the British Empire, under its Rana dynasty of premiers. The country was never colonized but served as a buffer state between Imperial China and British India. Parliamentary democracy was introduced in 1951 but was twice suspended by Nepalese monarchs, in 1960 and 2005. The Nepalese Civil War in the 1990s and early 2000s resulted in the establishment of a secular republic in 2008, ending the world's last Hindu monarchy.\n\
\n\
The Constitution of Nepal, adopted in 2015, affirms Nepal as a secular federal parliamentary republic divided into seven provinces. It remains the only multi-party, fully democratic nation in the world currently ruled by a communist party. Nepal was admitted to the United Nations in 1955, and friendship treaties were signed with India in 1950 and China in 1960. Nepal hosts the permanent secretariat of the SAARC, of which it is a founding member. Nepal is also a member of the Non-Aligned Movement and the Bay of Bengal Initiative. The Nepalese Armed Forces are the fifth-largest in South Asia; and are notable for their Gurkha history, particularly during the world wars, and has been a significant contributor to United Nations peacekeeping operations.\
"

var timer;
var count;
function startTextAnnimation(){
	count++;
	document.getElementById('deli').innerText = text.substr(0, count);
	if(count==text.length){
		clearInterval(timer);
	}
}

function animateText(){
	if(timer){
		clearInterval(timer);
	}
	count=0;
	timer = setInterval(startTextAnnimation, 50);
}