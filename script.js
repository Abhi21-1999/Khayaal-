const writings = [
  {id:1, title:"The Things We Never Said", category:"Poetry", mood:"Nostalgia", tone:"Melancholic", author:"Anonymous", excerpt:"Some conversations don't end. They simply become memories.", image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80", thoughts:42},
  {id:2, title:"Maybe Tomorrow", category:"Free Verse", mood:"Hope", tone:"Soft", author:"Meher", excerpt:"Some hopes survive simply because we haven't stopped believing.", image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80", thoughts:28},
  {id:3, title:"A Room Full of Rain", category:"Story", mood:"Solitude", tone:"Deep", author:"Aarav", excerpt:"The rain arrived before the apology did.", image:"https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=900&q=80", thoughts:19},
  {id:4, title:"रात अभी बाकी है", category:"Poetry", mood:"Life", tone:"Hopeful", author:"Anonymous", excerpt:"कुछ रातें सिर्फ़ अँधेरा नहीं होतीं, वे सुबह की तैयारी होती हैं।", image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80", thoughts:51},
  {id:5, title:"ਅਧੂਰੀ ਗੱਲ", category:"Open Writing", mood:"Longing", tone:"Raw", author:"Noor", excerpt:"ਕੁਝ ਗੱਲਾਂ ਕਹੀਆਂ ਨਹੀਂ ਜਾਂਦੀਆਂ, ਸਿਰਫ਼ ਮਹਿਸੂਸ ਹੁੰਦੀਆਂ ਨੇ।", image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80", thoughts:34},
  {id:6, title:"The Quiet Between Us", category:"Thoughts", mood:"Love", tone:"Thoughtful", author:"Anonymous", excerpt:"Sometimes silence is not distance. Sometimes it is everything we couldn't explain.", image:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80", thoughts:23}
];

const moods = ["All","Love","Longing","Peace","Heartbreak","Hope","Nostalgia","Life","Solitude"];
const categories = ["All","Poetry","Free Verse","Open Writing","Stories","Thoughts"];

function navLink(href, label) { return `<a class="text-link" href="${href}">${label}</a>`; }

function card(w) {
  return `<article class="writing-card">
    <a href="#read/${w.id}"><div class="card-image" style="background-image:url('${w.image}')"></div></a>
    <div class="card-body">
      <div class="meta">${w.category} · ${w.mood}</div>
      <h3><a href="#read/${w.id}">${w.title}</a></h3>
      <p class="excerpt">${w.excerpt}</p>
      <div class="card-footer"><span class="author">— ${w.author}</span><span>♡ ${w.thoughts} · 💭</span></div>
    </div>
  </article>`;
}

function home() {
  return `<div class="page">
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <div class="eyebrow">A writing community</div>
          <h1>Some thoughts are too beautiful to stay inside.</h1>
          <p>Khayaal is a quiet place for poetry, stories, free verses and everything you never knew how to say.</p>
          <div class="hero-buttons"><a class="button button-dark" href="#write">Start writing →</a><a class="button button-light" href="#explore">Explore writings</a></div>
        </div>
        <div class="hero-art" aria-label="Nostalgic landscape"></div>
      </div>
    </section>

    <section class="section container">
      <div class="shayari">
        <div class="shayari-text">“Kuchh khayaal lafzon ke mohtaaj nahi hote,<br>bas kisi khamosh dil mein ghar kar lete hain.”</div>
        <div class="shayari-author">— Anonymous</div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head"><div><div class="eyebrow">Find your corner</div><h2>Explore by feeling.</h2></div><p>Read what matches your mood, or wander somewhere completely unexpected.</p></div>
      <div class="category-grid">
        <a class="category" href="#explore?mood=Love"><strong>♡ Love</strong><span>Words that stay close.</span></a>
        <a class="category" href="#explore?mood=Longing"><strong>☾ Longing</strong><span>Things left unsaid.</span></a>
        <a class="category" href="#explore?mood=Peace"><strong>⌁ Peace</strong><span>A slower kind of reading.</span></a>
        <a class="category" href="#explore?mood=Hope"><strong>✦ Hope</strong><span>Reasons to keep going.</span></a>
        <a class="category" href="#explore?mood=Nostalgia"><strong>❧ Nostalgia</strong><span>Memories in sentences.</span></a>
      </div>
    </section>

    <section class="section container">
      <div class="section-head"><div><div class="eyebrow">From Khayaal</div><h2>Words worth staying with.</h2></div>${navLink("#explore","Explore all →")}</div>
      <div class="writing-grid">${writings.slice(0,3).map(card).join("")}</div>
    </section>

    <section class="section" style="background:var(--paper)">
      <div class="container section-head"><div><div class="eyebrow">For every writer</div><h2>Your words. Your choice.</h2></div><p>Publish for everyone, keep something private, or write anonymously. Khayaal gives your words room to exist on your terms.</p></div>
      <div class="container"><a class="button button-dark" href="#write">Write your first Khayaal →</a></div>
    </section>
  </div>`;
}

function explore() {
  let selectedCategory = "All", selectedMood = "All";
  const render = () => {
    let list = writings.filter(w => (selectedCategory==="All" || w.category===selectedCategory) && (selectedMood==="All" || w.mood===selectedMood));
    document.getElementById("explore-results").innerHTML = list.length ? list.map(card).join("") : `<div class="panel"><h3>No writings found.</h3><p>Try another feeling or category.</p></div>`;
    document.querySelectorAll("[data-cat]").forEach(b => b.classList.toggle("active", b.dataset.cat===selectedCategory));
    document.querySelectorAll("[data-mood]").forEach(b => b.classList.toggle("active", b.dataset.mood===selectedMood));
  };
  setTimeout(() => {
    document.querySelectorAll("[data-cat]").forEach(b => b.onclick=()=>{selectedCategory=b.dataset.cat;render();});
    document.querySelectorAll("[data-mood]").forEach(b => b.onclick=()=>{selectedMood=b.dataset.mood;render();});
    document.getElementById("searchInput").oninput = e => {
      const q=e.target.value.toLowerCase();
      document.getElementById("explore-results").innerHTML=writings.filter(w=>Object.values(w).join(" ").toLowerCase().includes(q)).map(card).join("");
    };
    render();
  });
  return `<div class="page">
    <section class="page-hero container"><div class="eyebrow">Discover</div><h1>Explore Khayaal.</h1><p>Find a thought that feels like it was written for you.</p>
    <input id="searchInput" class="search" placeholder="Search writings, writers, feelings..." /></section>
    <section class="container" style="padding-bottom:90px">
      <div class="filters">${categories.map(x=>`<button class="chip ${x==="All"?"active":""}" data-cat="${x}">${x}</button>`).join("")}</div>
      <div class="filters">${moods.map(x=>`<button class="chip ${x==="All"?"active":""}" data-mood="${x}">${x}</button>`).join("")}</div>
      <div id="explore-results" class="writing-grid"></div>
    </section>
  </div>`;
}

function writePage() {
  return `<div class="page">
    <section class="page-hero container"><div class="eyebrow">Create</div><h1>Put your Khayaal into words.</h1><p>There is no perfect way to begin. Start with one honest sentence.</p></section>
    <section class="container" style="padding-bottom:100px">
      <div class="write-layout">
        <div class="panel">
          <div class="field"><label>Title</label><input id="writeTitle" class="editor-title" placeholder="Give your writing a name..." /></div>
          <div class="field"><label>Your words</label><textarea id="writeText" class="editor" placeholder="Let your thoughts find their words..."></textarea></div>
          <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="button button-dark" onclick="publishDraft()">Publish to Khayaal →</button><button class="button button-light" onclick="showToast('Draft saved locally for this prototype.')">Save draft</button></div>
        </div>
        <aside class="panel">
          <div class="field"><label>Category</label><select id="writeCategory"><option>Poetry</option><option>Free Verse</option><option>Open Writing</option><option>Story</option><option>Thought</option></select></div>
          <div class="field"><label>Mood</label><select><option>Love</option><option>Longing</option><option>Peace</option><option>Heartbreak</option><option>Hope</option><option>Nostalgia</option><option>Life</option><option>Solitude</option></select></div>
          <div class="field"><label>Tone</label><select><option>Soft</option><option>Deep</option><option>Melancholic</option><option>Romantic</option><option>Thoughtful</option><option>Raw</option><option>Hopeful</option></select></div>
          <div class="toggle-row"><span>Publish anonymously</span><label class="toggle"><input type="checkbox" checked><span class="slider"></span></label></div>
          <div class="toggle-row"><span>Visible to everyone</span><label class="toggle"><input type="checkbox" checked><span class="slider"></span></label></div>
          <p style="font-size:12px;margin-top:18px">Cover images and real publishing will connect to the backend in the next version.</p>
        </aside>
      </div>
    </section>
  </div>`;
}

function readPage(id) {
  const w = writings.find(x=>x.id===Number(id)) || writings[0];
  return `<div class="page reading">
    <div class="container">
      <a class="text-link" href="#explore">← Back to Explore</a>
      <div class="reading-cover" style="background-image:linear-gradient(rgba(23,22,20,.12),rgba(23,22,20,.25)),url('${w.image}')"></div>
      <article class="reading-content">
        <div class="meta">${w.category} · ${w.mood}</div>
        <h1>${w.title}</h1>
        <p>— ${w.author}</p>
        <div class="reading-text">
          <p>${w.excerpt}</p>
          <p>There are moments that ask for nothing except to be remembered. A quiet room, a familiar street, the rain against a window — and suddenly an ordinary evening carries the weight of an entire story.</p>
          <p>Maybe words are not always meant to solve what we feel. Maybe sometimes they simply give a feeling somewhere safe to live.</p>
          <p>And perhaps that is enough.</p>
        </div>
        <div class="thought-box"><h3>What did these words make you feel?</h3><textarea id="thought" placeholder="Leave a thought..."></textarea><button class="button button-dark" style="margin-top:10px" onclick="showToast('Your thought was added in this prototype.')">Leave a thought</button></div>
      </article>
    </div>
  </div>`;
}

function community() {
  return `<div class="page">
    <section class="page-hero container"><div class="eyebrow">Meet writers</div><h1>The Khayaal Community.</h1><p>Words connect people who may have never met.</p></section>
    <section class="container" style="padding-bottom:100px">
      <div class="community-grid">
        <div class="panel"><div class="eyebrow">New on Khayaal</div>
          ${writings.slice(0,4).map(w=>`<div class="feed-item"><div class="meta">${w.category} · ${w.mood}</div><h3><a href="#read/${w.id}">${w.title}</a></h3><p>${w.excerpt}</p><span class="author">— ${w.author}</span></div>`).join("")}
        </div>
        <aside class="panel"><div class="eyebrow">Writers worth discovering</div>
          ${["Aarav","Meher","Noor","Ishaan"].map((n,i)=>`<div class="person-card"><div class="avatar-sm">${n[0]}</div><div class="grow"><strong>${n}</strong><small>Poetry · Life · Love</small></div><button class="chip" onclick="showToast('Following ${n} in this prototype.')">Follow</button></div>`).join("")}
          <div style="margin-top:28px"><div class="eyebrow">What's being felt</div><div class="filters">${moods.slice(1,7).map(m=>`<a class="chip" href="#explore?mood=${m}">${m}</a>`).join("")}</div></div>
        </aside>
      </div>
    </section>
  </div>`;
}

function profile() {
  return `<div class="page">
    <section class="profile-hero"><div class="container">
      <div class="profile-row"><div class="avatar-lg">A</div><div><div class="eyebrow" style="color:#c98b8f">Writer</div><h2>Abhi</h2><p>Collecting thoughts, one word at a time.</p></div></div>
      <div class="profile-stats"><div><strong>18</strong><span>Writings</span></div><div><strong>142</strong><span>Thoughts</span></div><div><strong>37</strong><span>Followers</span></div></div>
    </div></section>
    <section class="section container">
      <div class="section-head"><div><div class="eyebrow">About the writer</div><h2>Words first.</h2></div><button class="button button-dark" onclick="showToast('Profile editing will connect to the backend.')">Edit profile</button></div>
      <p style="max-width:650px;font-size:18px">I write about the things we feel but rarely know how to say. Hindi · Punjabi · English.</p>
      <div class="section-head" style="margin-top:70px"><div><div class="eyebrow">Their writings</div><h2>From the notebook.</h2></div></div>
      <div class="writing-grid">${writings.slice(0,3).map(card).join("")}</div>
    </section>
  </div>`;
}

function dashboard() {
  return `<div class="page">
    <section class="page-hero container"><div class="eyebrow">Your space</div><h1>Welcome back, Abhi.</h1><p>What are you thinking about today?</p><a class="button button-dark" href="#write">✍ Write something</a></section>
    <section class="container" style="padding-bottom:100px">
      <div class="dashboard-grid"><div class="stat"><strong>18</strong><span>Writings</span></div><div class="stat"><strong>6</strong><span>Drafts</span></div><div class="stat"><strong>142</strong><span>Thoughts</span></div><div class="stat"><strong>37</strong><span>Followers</span></div></div>
      <div class="table-card">
        <div class="table-row table-head"><div>Writing</div><div>Status</div><div>Actions</div></div>
        ${writings.slice(0,4).map(w=>`<div class="table-row"><div><strong>${w.title}</strong><br><small>${w.category} · ${w.mood}</small></div><div>Published</div><div><a class="text-link" href="#read/${w.id}">View</a></div></div>`).join("")}
      </div>
      <div class="panel" style="margin-top:24px"><h3>Your private thoughts</h3><p>Some words are written only to be understood by ourselves.</p><a class="text-link" href="#write">Open private writings →</a></div>
    </section>
  </div>`;
}

function auth() {
  return `<div class="auth-wrap"><div class="auth-card">
    <div class="eyebrow">Join the community</div><h1>Find your words.</h1><p>Create a quiet corner for your thoughts.</p>
    <div class="field"><label>Name</label><input placeholder="What should we call you?" /></div>
    <div class="field"><label>Username</label><input placeholder="@yourkhayaal" /></div>
    <div class="field"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
    <div class="field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
    <button class="button button-dark" onclick="showToast('Welcome to Khayaal — account creation will be connected later.')">Create my Khayaal →</button>
    <p style="text-align:center;font-size:13px">Already have an account? <a class="text-link" href="#signin">Sign in</a></p>
  </div></div>`;
}

function signin() {
  return `<div class="auth-wrap"><div class="auth-card">
    <div class="eyebrow">Welcome back</div><h1>Your words are waiting.</h1>
    <div class="field"><label>Email or username</label><input placeholder="you@example.com" /></div>
    <div class="field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
    <button class="button button-dark" onclick="showToast('Signed in for this prototype.')">Enter Khayaal →</button>
    <p style="text-align:center;font-size:13px"><a class="text-link" href="#signup">Create an account</a></p>
  </div></div>`;
}

function about() {
  return `<div class="page"><div class="about-block">
    <div class="eyebrow">About Khayaal</div><h1>A quiet corner of the internet for words.</h1>
    <p>Khayaal is a writing community for poetry, free verse, open writing, stories and thoughts — a place where people can share honestly, read gently and feel a little lighter.</p>
    <p>Write in Hindi, Punjabi, English or any language that carries your voice. Publish openly, keep something private, or write anonymously. Your words belong to you.</p>
    <div class="shayari" style="margin-top:45px"><div class="shayari-text">“Har khayaal ko alfaaz milne chahiye.”</div><div class="shayari-author">— Khayaal</div></div>
  </div></div>`;
}

function publishDraft() {
  const title=document.getElementById("writeTitle").value.trim() || "Untitled Khayaal";
  const text=document.getElementById("writeText").value.trim();
  if(!text){ showToast("Write something first."); return; }
  showToast(`“${title}” is ready to publish in the prototype.`);
}

function showToast(msg) {
  let t=document.getElementById("toast");
  if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.appendChild(t);}
  t.textContent=msg; t.classList.add("show"); clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>t.classList.remove("show"),2600);
}

function render() {
  const hash=location.hash.slice(1) || "home";
  const [route,param]=hash.split("/");
  const app=document.getElementById("app");
  if(route==="home") app.innerHTML=home();
  else if(route==="explore") app.innerHTML=explore();
  else if(route==="write") app.innerHTML=writePage();
  else if(route==="read") app.innerHTML=readPage(param);
  else if(route==="community") app.innerHTML=community();
  else if(route==="profile") app.innerHTML=profile();
  else if(route==="dashboard") app.innerHTML=dashboard();
  else if(route==="signup") app.innerHTML=auth();
  else if(route==="signin") app.innerHTML=signin();
  else if(route==="about") app.innerHTML=about();
  else app.innerHTML=home();
  window.scrollTo({top:0,behavior:"instant"});
}

document.getElementById("menuButton").addEventListener("click",()=>{
  const m=document.getElementById("mobileMenu");
  m.hidden=!m.hidden;
});
document.querySelectorAll("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mobileMenu").hidden=true));
window.addEventListener("hashchange",render);
render();
