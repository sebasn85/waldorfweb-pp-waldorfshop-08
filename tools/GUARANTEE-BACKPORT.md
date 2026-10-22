# Garantie-Komponenten für plentyShop LTS 5.0.86

Vorbereitete Theme-Version: Waldorfshop7 5.0.75.
Basis: `mobileChanges`, Commit `5dc0deda2a6911f465ded4d5eec2d1f1302bc99b`.
Arbeitsbranch: `test/guarantee-components-5.0.86-2026-10-22`.

Die drei Vue-Komponenten `GuaranteeBadge`, `GuaranteeLabelFull` und
`GuaranteeLabelWidget` sowie die zugehörigen SCSS-Regeln stammen unverändert
aus dem offiziellen Ceres-Tag `5.0.86` (AGPL-3.0).
Die SCSS-Datei setzt die beiden benötigten Bootstrap-Farbvariablen auf deren
Standardwerte. Die separat kompilierte CSS-Datei wird im Theme-Head geladen.

Die Komponenten werden in `app.js` (Client und SSR) sowie `base.js`
registriert. Es wird keine zweite Vue-Instanz oder Vue-Version eingeführt.
Die bestehenden Theme- und Checkout-Anpassungen werden nicht ersetzt.

## Erstellen und prüfen

```sh
npm ci --ignore-scripts
npm run build:js
npm run test:guarantees
```

`build:js` kompiliert auch die Garantiestile. Die vorhandene Buildkette erstellt
Client-, Basis-, Checkout- und Server-Bundles für Entwicklung und Produktion.
Die generierten Dateien unter `resources/js/dist` gehören zur Bereitstellung.

Lokal bestanden: alle sechs Webpack-Builds, Komponenten-Kompilierung,
Registrierung in beiden Einstiegspunkten, Sichtbarkeit bei fehlenden Daten,
reaktive Änderung von Hersteller, Modell und Garantiedauer bei Variantenwechsel.
Ein zusätzlicher isolierter Vue-SSR-Test rendert beide SVG-Anzeigen und die
aufklappbare Garantie mit Hersteller/Modell erfolgreich.
Die Produktionsbundles melden Größenhinweise, aber keine Kompilierungsfehler.

## Noch ausstehende Übernahme und Shop-Prüfung

Ziel-Repository: `sebasn85/waldorfweb-pp-waldorfshop-08`.
Dessen anfänglicher `master`-Stand war 5.0.56. Der neue Testbranch wird daher
zunächst auf den oben genannten exakten `mobileChanges`-Stand des tatsächlich
verwendeten Themes gesetzt. Darauf werden nur diese Garantie-Anpassungen
aufgebaut. Live-Set 436 und dessen Original-Repository bleiben unverändert.

Vor Bereitstellung ausschließlich im unverknüpften Testset 437:

1. Den neuen Theme-Branch veröffentlichen und nur in 437 auswählen.
2. Die genaue Theme-Abhängigkeit von WaldorfshopErweiterungen in dessen
   separatem Testbranch von 5.0.74 auf 5.0.75 anheben.
3. 437 bereitstellen und seine ShopBuilder-Inhalte neu generieren.
4. Garantie mit vorhandenen Artikeldaten, ohne Garantiedaten und beim
   Variantenwechsel sowie aufgeklappt/geschlossen mobil und am Desktop prüfen.
5. Warenkorb, Registrierung, Gastbestellung und Zahlungswege prüfen.

Der bereits bestehende Fehler `googleRecaptchaApiKey is not defined` wird
durch diese Änderung nicht behoben. Die ausstehende reCAPTCHA-Prüfung muss
vor einer späteren konkreten Live-Freigabe ausdrücklich angesprochen werden.
