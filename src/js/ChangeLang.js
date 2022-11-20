/*
@file: ChangeLang.js
@author: @rishisant
@date: 2022-20-11
*/

let title_en = "Atelier's Story";
let title_fr = "L'histoire d'Atelier";
let title_jp = "アトリエの物語";

let body_fr = "&nbsp;&nbsp;&nbsp;&nbsp;Atelier offre une plateforme unique et pratique aux artistes pour présenter leurs œuvres et aux amateurs d'art pour découvrir de nouveaux artistes et de nouvelles œuvres. Atelier permet à chacun d'apprécier et de soutenir l'art de manière simple et amusante.<br></br>&nbsp;&nbsp;&nbsp;&nbsp; Je supprime les barrières qui empêchent les artistes de partager leur travail avec le monde entier, ainsi que le bouton \"J'aime !\" et les autres mécanismes de réaction, et je les remplace par un système de vote plus significatif et plus engageant.<br></br>&nbsp;&nbsp;&nbsp;&nbsp; Je crois au pouvoir des œuvres d'art pour unir et inspirer les gens. J'espère que Atelier aidera les artistes et les amateurs d'art à se connecter les uns aux autres et à partager leur enthousiasme pour l'art. Je suis moi-même un artiste qui peint sur plusieurs médiums différents. Je suis également ingénieur en logiciel et je suis passionné par la création de produits qui peuvent avoir un impact positif sur le monde. J'espère qu'Atelier sera l'un de ces produits.<br></br>&nbsp;&nbsp;&nbsp;&nbsp; Atelier est un travail en cours et je suis toujours à la recherche de moyens pour améliorer cette plateforme. Si vous avez des suggestions, n'hésitez pas à me contacter sur mon discord, santanamu#0247.";
let body_jp = "&nbsp;&nbsp;&nbsp;&nbsp;アトリエは、アーティストが作品を発表し、アート愛好家が新しいアーティストや作品を発見するためのユニークで便利なプラットフォームを提供します。アトリエを使えば、誰もが楽しく簡単にアートを鑑賞し、支援することができます。<br></br>&nbsp;&nbsp;&nbsp;&nbsp;私は、アーティストが作品を世界に発信するのを阻む障壁を取り除き、「いいね！」ボタンなどのフィードバックの仕組みを改善し、より有意義で魅力的な投票システムに置き換えることを唯一の目的として、アトリエを設立しました。<br></br>&nbsp;&nbsp;&nbsp;&nbsp;私は、アート作品が人々を団結させ、感動させる力があると信じています。アトリエが、アーティストとアート愛好家が互いにつながり、アートへの愛を分かち合う手助けになればと願っています。私自身、複数の異なる媒体で絵を描くアーティストです。また、ソフトウェアエンジニアでもあり、世の中に良い影響を与えられるような製品を作ることに情熱を注いでいます。アトリエがそのような製品のひとつになればと願っています。<br></br>&nbsp;&nbsp;&nbsp;&nbsp;アトリエは現在進行形であり、私は常にこのプラットフォームを改善する方法を探しています。もし何かご提案があれば、私のディスコードまでお気軽にご連絡ください。santanamu#0247 です。";
let body_en = "&nbsp;&nbsp;&nbsp;&nbsp;Atelier provides a unique and convenient platform for artists to showcase their work, and for art lovers to discover new and exciting artists and artworks. With Atelier, everyone can appreciate and support the arts in a fun and easy way.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;I founded Atelier for the sole purpose of removing the barriers that prevent artists from sharing their work with the world, as well as improve feedback mechanisms such as like buttons, substituting them for a more meaningful and engaging voting system.<br></br>&nbsp;&nbsp;&nbsp;&nbsp; I am a true believer in the power of artwork in uniting and inspiring people, and I hope that Atelier can help artists and art lovers alike to connect with each other and share their love for the arts. I am an artist myself, painting in multiple different mediums. I am also a software engineer, and I am passionate about building products that can make a positive impact on the world. I hope that Atelier can be one of those products.<br></br>&nbsp;&nbsp;&nbsp;&nbsp; Atelier is a work in progress, and I am always looking for ways to improve the platform. If you have any suggestions, please feel free to reach out to me at my discord: @santanamu#0247."

export function select_EN() {
    var body_txt = document.getElementById("os_text");
    var title_txt = document.getElementById("ourstory");
    var jp = document.getElementById("to_jp");
    var en = document.getElementById("to_en");
    var fr = document.getElementById("to_fr");

    if (en.style.backgroundColor == "#cdcdcd") {
        return;
    }

    en.style.animation = "select_lang2 1s 1";
    fr.style.backgroundColor = "#f5f5f5";
    jp.style.backgroundColor = "#f5f5f5";

    body_txt.innerHTML = body_en;
    title_txt.innerHTML = title_en;

    setTimeout(() => {
        en.style.backgroundColor = "#cdcdcd";
        en.style.animation = "";
    }, 1000);

    return;
}

export function select_FR() {
    var title_txt = document.getElementById("ourstory");
    var body_txt = document.getElementById("os_text");
    var jp = document.getElementById("to_jp");
    var en = document.getElementById("to_en");
    var fr = document.getElementById("to_fr");

    if (fr.style.backgroundColor == "#cdcdcd") {
        return;
    }

    fr.style.animation = "select_lang2 1s 1";

    en.style.backgroundColor = "#f5f5f5";
    jp.style.backgroundColor = "#f5f5f5";
    body_txt.innerHTML = body_fr;
    title_txt.innerHTML = title_fr;

    setTimeout(() => {
        fr.style.backgroundColor = "#cdcdcd";
        fr.style.animation = "";
    }, 1000);

    return;
}

export function select_JP() {
    var title_txt = document.getElementById("ourstory");
    var body_txt = document.getElementById("os_text");
    var jp = document.getElementById("to_jp");
    var en = document.getElementById("to_en");
    var fr = document.getElementById("to_fr");

    if (jp.style.backgroundColor == "#cdcdcd") {
        return;
    }

    jp.style.animation = "select_lang2 1s 1";
    en.style.backgroundColor = "#f5f5f5";
    fr.style.backgroundColor = "#f5f5f5";

    body_txt.innerHTML = body_jp;
    title_txt.innerHTML = title_jp;

    setTimeout(() => {
        jp.style.backgroundColor = "#cdcdcd";
        jp.style.animation = "";
    }, 1000);

    return;
}