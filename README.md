# 🌟 MyPortfolio

## 📝 **Description**
**MyPortfolio** est une application web interactive, développée en Angular, qui met en avant les compétences, les expériences professionnelles, et les projets personnels de **Nabil KADOURI**, développeur web. Ce portfolio offre une interface moderne et réactive pour explorer son parcours.

---

## 📋 **Prérequis**
- ✅ **Angular CLI** version 15 ou supérieure
- ✅ **Node.js** version 16 ou supérieure
- ✅ **npm** (inclus avec Node.js)
- ✅ Navigateur web moderne

---

## 🚀 **Installation**

### 1️⃣ **Cloner le dépôt**
Téléchargez le projet depuis GitHub :
```bash
git clone <URL_DU_DEPOT>
cd angular-portfolio
```

### 2️⃣ **Installer les dépendances**
Installez les dépendances nécessaires avec npm :
```bash
npm install
```

### 3️⃣ **Lancer l'application**
Démarrez un serveur de développement local :
```bash
ng serve
```
Accédez à l'application sur [http://localhost:4200/](http://localhost:4200/).

---

## 🌟 **Fonctionnalités principales**

### 🌍 **Sections principales**
1. **💼 Projets** : Présentation dynamique des projets avec des descriptions, des icônes et des liens GitHub.
2. **⚙️ Hard Skills** : Carrousel interactif des compétences techniques.
3. **🤝 Soft Skills** : Mise en avant des compétences humaines via un layout engageant.
4. **🎨 Hobbies** : Affichage des centres d'intérêt à travers une grille.
5. **📜 Expériences** : Section dédiée au parcours professionnel.
6. **🔗 Navigation** : Header fixe pour une navigation fluide, et footer regroupant des liens utiles.

---

## 🗂️ **Organisation des fichiers**

### 🗃️ **Fichiers principaux**
- **index.html** : Point d'entrée de l'application Angular.
- **styles.css** : Fichier de styles globaux configuré avec Tailwind CSS.

### 🧩 **Composants**
- **Header** : Barre de navigation principale (`header.component.html`).
- **Hero** : Section d’introduction avec le nom et le rôle (`hero.component.html`).
- **Projets** : Affiche des projets dynamiques (`project.component.html`).
- **Hard Skills** : Carrousel des compétences techniques (`hard-skill.component.html`).
- **Soft Skills** : Grille des compétences humaines (`soft-skill.component.html`).
- **Hobbies** : Présentation des centres d’intérêt (`hobby.component.html`).
- **Expérience** : Détails sur les expériences professionnelles (`experience.component.html`).
- **Footer** : Section finale regroupant des liens utiles (`footer.component.html`).

### ⚙️ **Configuration**
- **tailwind.config.js** : Configuration des thèmes et plugins Tailwind CSS.
- **.gitignore** : Liste des fichiers ignorés pour Git.

---

## ✏️ **Exemples de Code**

### **Composant des projets** (HTML)
```html
<section class="project-section">
  <div *ngFor="let projet of projets">
    <h3>{{ projet.title }}</h3>
    <p>{{ projet.description }}</p>
    <a [href]="projet.github" target="_blank">Voir projet</a>
  </div>
</section>
```

### **Composant des compétences techniques** (CSS)
```css
.carousel {
  display: flex;
  transition: transform 0.7s ease-in-out;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
}
```

### **Navigation principale**
```html
<header>
  <nav>
    <ul>
      <li><a href="#projet">Projets</a></li>
      <li><a href="#hard">Hard Skills</a></li>
      <li><a href="#soft">Soft Skills</a></li>
      <li><a href="#hobby">Hobbies</a></li>
    </ul>
  </nav>
</header>
```

---

## 🛠️ **Développement**
Pour contribuer :
1. Créez une branche :
   ```bash
   git checkout -b feature/ma-branche
   ```
2. Faites vos modifications.
3. Soumettez une pull request sur GitHub.

---

## 💬 **Remerciements**
Développé avec passion par **Nabil KADOURI**. 

📩 [Contactez-moi](mailto:kadourinabil7@gmail.com)
🌐 [Mon LinkedIn](https://www.linkedin.com/in/nabil-kadouri/)
🐙 [Mon GitHub](https://github.com/NabilKADOURI)