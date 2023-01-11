<p><strong><em><span style="text-decoration: underline;">CentralCorp Launcher est un fork du Selvania-Launcher prennant en charge &agrave; 100% la liaison avec Azuriom</span></em></strong></p>
<p><span style="text-decoration: underline;"><em>Comment configurer ce launcher ?</em></span></p>
<p>1) Il faut fork ce projet. Ensuite il faut le clone avec git ou github desktop.</p>
<p>2) Allez ensuite dans le fichier package.json et modifer les lignes suivantes: "name" et "<span style="font-size: 14.4px;">preductname</span><span style="font-size: 0.9em;">" avec le nom du launcher, ""version" avec la version, "description" avec la description, "author" avec l'auteur (merci de laisser Luuxis/Riptiaz et de rajouter votre pseudo), "url" avec l'url de votre webfolder, "azauth" avec l'url de votre site azuriom.</span></p>
<p>3) Faites ensuites <em><strong>npm i</strong></em></p>
<p>4) Allez maintenant dans votre webfolder, remplacez le config.json par celui dans la branche webfolder de mon fork si cela n'est pas d&eacute;j&agrave; fait. Ouvres ensuites ce fichier.</p>
<p>5) Indiquez ensuite la m&ecirc;me chose que dans le launcher Selvania sauf: -<strong>"online" doit &ecirc;tre sur true</strong></p>
<p>6) Changez maintenant ces lignes dans le config.json:</p>
<p>-"changelog_version": changer par la version de votre serveur/launcher</p>
<p>-"changelog_new": changer par du code html pour expliquer les nouveaut&eacute;s du launcher ou du serveur</p>
<p>-"homeimg_admin": changer par un lien d'une image en 1920x1080 qui sera affich&eacute; pour les admins en fond</p>
<p><span style="font-size: 14.4px;">-"homeimg_vip":&nbsp;</span><span style="font-size: 14.4px;">changer par un lien d'une image en 1920x1080 qui sera affich&eacute; pour les vip en fond</span></p>
<p><span style="font-size: 14.4px;">-"homeimg_modo":&nbsp;</span><span style="font-size: 14.4px;">changer par un lien d'une image en 1920x1080 qui sera affich&eacute; pour les modo en fond</span></p>
<p><span style="font-size: 14.4px;">-"homeimg_member":&nbsp;</span><span style="font-size: 14.4px;">changer par un lien d'une image en 1920x1080 qui sera affich&eacute; pour les membres en fond</span></p>
<p><span style="font-size: 14.4px;">-"server_img": changer par un lien d'une image logo de votre serveur (sera affich&eacute; sur le statut serveur)</span></p>
<p><strong>Pour ce qui est mise &agrave; jour, build, fichier forge, c'est comme le Selvania Launcher (attention pour le moment l'ancienne version de minecraft-java-core est utilis&eacute;e, vous devez donc mettre manuellement les fichiers forges/fabric)</strong></p>