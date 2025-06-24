import{s as d,c as _,m as u,a as m,b as w,g as b,h as g}from"./footer-B8ZrFvtH.js";const h=()=>{const o=["achievements","upcomingevents","competitions","specialvisit","outdooractivities","vacancies"],r=[];async function p(){return new Promise(async(t,e)=>{let{data:a,error:s}=await d.from("meta-data-img").select("*");s&&e(s),t(a)})}p().then(t=>{t.forEach(async e=>{const{data:a}=d.storage.from("sub-home").getPublicUrl(e.path),s=e.path.split("/")[1].toLowerCase();if(!o.includes(s))return;r.push(s);const l=document.querySelector(`
            .news__subcontent-wrapper-${s} .news__subcontent`),n=document.createElement("div");n.classList.add("news__subcontent-card");const c=document.createElement("div");c.classList.add("news__subcontent-card-img-wrapper"),c.innerHTML=`
            <img src="${a.publicUrl}" alt="" class="news__subcontent-card-img">
        `;const i=document.createElement("div");i.classList.add("news__subcontent-card-description"),i.innerHTML=`
            <div class="news__subcontent-card-description-preview">
              <div
                class="news__subcontent-card-description-title-wrapper"
              >
                <h4 class="news__subcontent-card-description-subtitle">
                  ${e.date}
                </h4>
                <p class="news__subcontent-card-description-title">
                  ${e.title}
                </p>
              </div>
            </div>
            <p class="news__subcontent-card-description-content">
             ${e.description}
            </p>
        `,n.append(c),n.append(i),l.append(n)})}).finally(()=>{o.forEach(t=>{if(!r.includes(t)){const e=document.createElement("div");e.classList.add("news__no-item"),e.textContent="No items to display",document.querySelector(`.news__subcontent-wrapper-${t} .news__subcontent`).append(e)}})})};_();u();async function v(){Promise.all([h(),m(),w(),b()]).then(()=>{g()})}v();
