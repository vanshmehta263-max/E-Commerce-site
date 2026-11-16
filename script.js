const products = [
 {id:1,name:"Everyday Linen Shirt",category:"Fashion",price:1499,oldPrice:1999,rating:4.8,reviews:124,image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",badge:"BESTSELLER",description:"An easy, breathable linen-blend shirt made for everyday plans. Relaxed fit, clean lines and effortless styling."},
 {id:2,name:"Studio Wireless Headphones",category:"Tech",price:3299,oldPrice:3999,rating:4.9,reviews:89,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",badge:"TOP RATED",description:"Comfort-first wireless audio with a rich, balanced sound profile and a minimal everyday design."},
 {id:3,name:"Ceramic Table Vase",category:"Home",price:899,oldPrice:1199,rating:4.7,reviews:56,image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=700&q=80",badge:"NEW",description:"A sculptural ceramic accent that adds a calm, considered touch to shelves, desks and dining spaces."},
 {id:4,name:"Classic Minimal Watch",category:"Accessories",price:2499,oldPrice:2999,rating:4.8,reviews:102,image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80",badge:"POPULAR",description:"A timeless, versatile watch with a clean dial and an understated silhouette."},
 {id:5,name:"Weekend Carry Tote",category:"Fashion",price:1199,oldPrice:1499,rating:4.6,reviews:73,image:"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80",badge:"-20%",description:"A roomy everyday tote designed to carry the essentials, from weekday errands to weekend plans."},
 {id:6,name:"Glow Desk Lamp",category:"Home",price:1799,oldPrice:2199,rating:4.7,reviews:41,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",badge:"DESIGN PICK",description:"Soft, focused light and a simple modern profile make this lamp a lovely addition to your workspace."},
 {id:7,name:"Everyday Sneakers",category:"Fashion",price:2199,oldPrice:2799,rating:4.8,reviews:158,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",badge:"TRENDING",description:"A versatile pair for long days and laid-back looks, with a cushioned feel and clean sporty style."},
 {id:8,name:"Compact Bluetooth Speaker",category:"Tech",price:1899,oldPrice:2299,rating:4.6,reviews:67,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",badge:"GREAT VALUE",description:"Bring your playlists along with a compact speaker built for clear sound and easy everyday listening."},
 {id:9,name:"Relaxed Cotton T-Shirt",category:"Fashion",price:799,oldPrice:999,rating:4.6,reviews:48,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",badge:"EVERYDAY PICK",description:"A soft cotton tee with a relaxed fit, made to become a dependable everyday favourite."},
 {id:10,name:"Classic Denim Jacket",category:"Fashion",price:2799,oldPrice:3499,rating:4.8,reviews:92,image:"https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80",badge:"TRENDING",description:"A versatile denim layer that works across seasons, with a timeless shape and easy styling."},
 {id:11,name:"Women's Everyday Dress",category:"Fashion",price:1899,oldPrice:2399,rating:4.7,reviews:64,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",badge:"NEW",description:"An easy-to-style dress with a flattering silhouette for casual days and special plans."},
 {id:12,name:"Urban Crossbody Bag",category:"Fashion",price:1399,oldPrice:1799,rating:4.6,reviews:51,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",badge:"CUSTOMER FAVOURITE",description:"A compact crossbody bag with room for the essentials and a versatile everyday look."},
 {id:13,name:"Performance Running Shoes",category:"Fashion",price:2999,oldPrice:3699,rating:4.8,reviews:113,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",badge:"TOP PICK",description:"Lightweight everyday runners designed for comfortable movement and sporty styling."},
 {id:14,name:"Over-Ear Studio Headset",category:"Tech",price:2799,oldPrice:3399,rating:4.7,reviews:76,image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80",badge:"GREAT SOUND",description:"Comfortable over-ear headphones for music, calls and focused listening."},
 {id:15,name:"Smart Fitness Watch",category:"Tech",price:3499,oldPrice:4299,rating:4.6,reviews:88,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",badge:"POPULAR",description:"A clean, modern smartwatch-style wearable for keeping everyday activity close at hand."},
 {id:16,name:"Portable Mini Projector",category:"Tech",price:5999,oldPrice:6999,rating:4.5,reviews:39,image:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=700&q=80",badge:"MOVIE NIGHT",description:"A compact home-entertainment pick for creating a cosy movie-night setup."},
 {id:17,name:"Wireless Charging Stand",category:"Tech",price:1299,oldPrice:1599,rating:4.6,reviews:58,image:"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=80",badge:"DESK ESSENTIAL",description:"Keep a compatible device neatly positioned on your desk or bedside table while charging."},
 {id:18,name:"Mechanical Keyboard",category:"Tech",price:2599,oldPrice:3199,rating:4.8,reviews:101,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",badge:"WORKSPACE PICK",description:"A tactile keyboard for a more satisfying typing setup at home or in the office."},
 {id:19,name:"Soft Textured Cushion Set",category:"Home",price:999,oldPrice:1299,rating:4.7,reviews:44,image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",badge:"COSY PICK",description:"A pair of decorative cushions that bring a soft, welcoming finish to your living space."},
 {id:20,name:"Minimal Wall Clock",category:"Home",price:1199,oldPrice:1499,rating:4.5,reviews:32,image:"https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80",badge:"CLEAN DESIGN",description:"A simple wall clock that adds function and understated style to any room."},
 {id:21,name:"Modern Table Planter",category:"Home",price:699,oldPrice:899,rating:4.6,reviews:29,image:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",badge:"FRESH SPACE",description:"A decorative planter to bring a little greenery to shelves, desks and windowsills."},
 {id:22,name:"Cotton Bed Throw",category:"Home",price:1599,oldPrice:1999,rating:4.7,reviews:37,image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",badge:"HOME FAVOURITE",description:"A lightweight throw for adding a comfortable, layered finish to your bedroom or sofa."},
 {id:23,name:"Insulated Travel Mug",category:"Home",price:599,oldPrice:799,rating:4.5,reviews:61,image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80",badge:"DAILY ESSENTIAL",description:"A reusable travel mug for taking your favourite hot or cold drink on the go."},
 {id:24,name:"Polarized Sunglasses",category:"Accessories",price:1099,oldPrice:1399,rating:4.7,reviews:83,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",badge:"SUN READY",description:"A versatile pair of sunglasses with a clean frame for everyday outdoor style."},
 {id:25,name:"Leather Card Holder",category:"Accessories",price:699,oldPrice:899,rating:4.6,reviews:46,image:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",badge:"COMPACT PICK",description:"A slim card holder that keeps your daily essentials organised without the bulk."},
 {id:26,name:"Everyday Analog Watch",category:"Accessories",price:1999,oldPrice:2499,rating:4.8,reviews:72,image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",badge:"TIMELESS",description:"An understated analogue watch that pairs easily with both casual and smart outfits."},
 {id:27,name:"Classic Leather Belt",category:"Accessories",price:899,oldPrice:1199,rating:4.5,reviews:35,image:"https://images.unsplash.com/photo-1624222247344-550fb8f1d4f7?auto=format&fit=crop&w=700&q=80",badge:"WARDROBE BASIC",description:"A wardrobe staple with a clean buckle and a versatile finish."},
 {id:28,name:"Everyday Backpack",category:"Accessories",price:1799,oldPrice:2199,rating:4.7,reviews:95,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",badge:"BESTSELLER",description:"A practical backpack with a streamlined profile for commuting, campus and weekend trips."}
];
const $ = s => document.querySelector(s);
const money = n => "₹" + n.toLocaleString("en-IN");
let activeCategory="All", searchTerm="", sortMode="featured";
let cart=JSON.parse(localStorage.getItem("novaCart")||"[]");
let wishlist=JSON.parse(localStorage.getItem("novaWishlist")||"[]");
let toastTimer;

function save(){localStorage.setItem("novaCart",JSON.stringify(cart));localStorage.setItem("novaWishlist",JSON.stringify(wishlist));}
function showToast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2200);}
function visibleProducts(){
 let list=products.filter(p=>(activeCategory==="All"||p.category===activeCategory)&&(p.name.toLowerCase().includes(searchTerm)||p.category.toLowerCase().includes(searchTerm)));
 if(sortMode==="price-low")list.sort((a,b)=>a.price-b.price);
 if(sortMode==="price-high")list.sort((a,b)=>b.price-a.price);
 if(sortMode==="rating")list.sort((a,b)=>b.rating-a.rating);
 return list;
}
function renderProducts(){
 const list=visibleProducts(), grid=$("#productGrid");
 $("#resultCount").textContent=`${list.length} product${list.length===1?"":"s"}`;
 grid.innerHTML=list.map(p=>`<article class="product-card">
  <div class="product-image-wrap" data-view="${p.id}"><img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-badge">${p.badge}</span>
  <button class="wish-btn ${wishlist.includes(p.id)?"active":""}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist">${wishlist.includes(p.id)?"♥":"♡"}</button>
  <button class="quick-view" data-view="${p.id}">QUICK VIEW</button></div>
  <div class="product-info"><span class="product-category">${p.category}</span><h3 class="product-name">${p.name}</h3><div class="product-meta"><span class="price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></span><span class="rating"><b>★</b> ${p.rating} (${p.reviews})</span></div></div>
 </article>`).join("");
 $("#emptyState").classList.toggle("hidden",list.length!==0);
 grid.classList.toggle("hidden",list.length===0);
 document.querySelectorAll(".filter-tab").forEach(b=>b.classList.toggle("active",b.dataset.category===activeCategory));
}
function renderCounts(){
 $("#cartCount").textContent=cart.reduce((n,i)=>n+i.qty,0);
 $("#wishlistCount").textContent=wishlist.length;
 $("#drawerItemCount").textContent=`(${cart.reduce((n,i)=>n+i.qty,0)})`;
}
function renderCart(){
 const items=$("#cartItems");
 items.innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);if(!p)return "";return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty-control"><button data-qty="${p.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${i.qty}</span><button data-qty="${p.id}" data-change="1" aria-label="Increase quantity">+</button></div></div><button class="remove-item" data-remove="${p.id}">Remove</button></div>`}).join("");
 const empty=cart.length===0, subtotal=cart.reduce((n,i)=>n+products.find(p=>p.id===i.id).price*i.qty,0);
 $("#cartEmpty").classList.toggle("hidden",!empty);$("#cartSummary").classList.toggle("hidden",empty);
 $("#cartSubtotal").textContent=money(subtotal);$("#cartTotal").textContent=money(subtotal);$("#shippingCost").textContent=subtotal>=1499?"FREE":money(99);
 if(subtotal>0&&subtotal<1499)$("#cartTotal").textContent=money(subtotal+99);
 renderCounts();
}
function addToCart(id){const found=cart.find(i=>i.id===id);if(found)found.qty++;else cart.push({id,qty:1});save();renderCart();showToast("Added to your bag");}
function openCart(){$("#cartDrawer").classList.add("open");$("#overlay").classList.add("show");$("#cartDrawer").setAttribute("aria-hidden","false");}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("show");$("#cartDrawer").setAttribute("aria-hidden","true");}
function toggleWishlist(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];save();renderProducts();renderCounts();showToast(wishlist.includes(id)?"Saved to wishlist":"Removed from wishlist");}
function openProduct(id){const p=products.find(x=>x.id===id);if(!p)return;$("#modalContent").innerHTML=`<div class="modal-product"><img src="${p.image}" alt="${p.name}"><div><span class="product-category">${p.category}</span><h2>${p.name}</h2><div class="rating"><b>★</b> ${p.rating} · ${p.reviews} reviews</div><div class="price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></div><p>${p.description}</p><p>✓ Quality checked & carefully packed<br>✓ Easy 7-day returns<br>✓ Secure payment options</p><button class="btn btn-dark" data-add="${p.id}">Add to bag <span>→</span></button></div></div>`;$("#modalBackdrop").classList.add("show");}
function closeModal(){$("#modalBackdrop").classList.remove("show");}
function setCategory(category){activeCategory=category;renderProducts();$("#shop").scrollIntoView({behavior:"smooth"});}
document.addEventListener("click",e=>{
 const wish=e.target.closest("[data-wish]");if(wish){e.stopPropagation();toggleWishlist(Number(wish.dataset.wish));return;}
 const view=e.target.closest("[data-view]");if(view){openProduct(Number(view.dataset.view));return;}
 const add=e.target.closest("[data-add]");if(add){addToCart(Number(add.dataset.add));closeModal();return;}
 const qty=e.target.closest("[data-qty]");if(qty){const id=Number(qty.dataset.qty),item=cart.find(x=>x.id===id);item.qty+=Number(qty.dataset.change);if(item.qty<=0)cart=cart.filter(x=>x.id!==id);save();renderCart();return;}
 const remove=e.target.closest("[data-remove]");if(remove){cart=cart.filter(x=>x.id!==Number(remove.dataset.remove));save();renderCart();return;}
 const cat=e.target.closest("[data-category]");if(cat){setCategory(cat.dataset.category);return;}
 const navCat=e.target.closest("[data-category-link]");if(navCat){setCategory(navCat.dataset.categoryLink);$("#mobileNav").classList.remove("open");}
});
$("#filterTabs").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(b){activeCategory=b.dataset.category;renderProducts();}});
$("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();renderProducts();});
$("#sortSelect").addEventListener("change",e=>{sortMode=e.target.value;renderProducts();});
$("#clearFilters").addEventListener("click",()=>{activeCategory="All";searchTerm="";sortMode="featured";$("#searchInput").value="";$("#sortSelect").value="featured";renderProducts();});
$("#resetSearch").addEventListener("click",()=>{$("#clearFilters").click();});
$("#cartTrigger").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);
$("#continueShopping").addEventListener("click",closeCart);
$("#closeModal").addEventListener("click",closeModal);$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeModal();});
$("#checkoutBtn").addEventListener("click",()=>{showToast("Demo checkout: connect a payment provider to accept orders.");});
$("#mobileMenuBtn").addEventListener("click",()=>$("#mobileNav").classList.toggle("open"));
$("#wishlistHeaderBtn").addEventListener("click",()=>{activeCategory="All";searchTerm="";$("#searchInput").value="";renderProducts();const ids=wishlist.slice();if(ids.length){$("#productGrid").innerHTML=products.filter(p=>ids.includes(p.id)).map(p=>`<article class="product-card"><div class="product-image-wrap" data-view="${p.id}"><img class="product-image" src="${p.image}" alt="${p.name}"><button class="wish-btn active" data-wish="${p.id}">♥</button></div><div class="product-info"><span class="product-category">${p.category}</span><h3 class="product-name">${p.name}</h3><span class="price">${money(p.price)}</span></div></article>`).join("");$("#resultCount").textContent=`${ids.length} wishlist item${ids.length===1?"":"s"}`;}else showToast("Your wishlist is empty");$("#shop").scrollIntoView({behavior:"smooth"});});
$("#accountBtn").addEventListener("click",()=>showToast("Account sign-in can be connected to a backend."));
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent="Thanks for subscribing! (Demo form)";$("#newsletterEmail").value="";});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput").focus();}if(e.key==="Escape"){closeCart();closeModal();}});
renderProducts();renderCart();