# Waldorfshop8: Garantie-Kompatibilität

Version 5.0.75, Namespace und Plugin-Name `Waldorfshop8`.
Ziel: `sebasn85/waldorfweb-pp-waldorfshop-08`, Branch
`test/waldorfshop8-compat-2026-10-22`.

Dies ist eine separate Erweiterung für das weiterhin aktive Waldorfshop7
5.0.74 und Ceres/IO 5.0.86. Die gemeinsame Git-Verknüpfung von Waldorfshop7
bleibt beim Original-Repository und `mobileChanges`.

Die Layoutvorlage lädt die neu gebauten Client- und SSR-Skripte aus Waldorfshop8.
Die drei Garantie-Komponenten und ihre Gestaltung stammen aus Ceres 5.0.86
(AGPL-3.0). Das Artikelfeld `variation.durabilityYears` wird ergänzt.
Bestehende Widgets, Konfiguration, Routen, Kategorie-/Listenfelder und die
übrigen Vorlagen werden weiterhin vom aktiven Waldorfshop7 bereitgestellt.
Das separate Plugin registriert keine zusätzlichen Routen oder Widgets.
Die bestehenden Erweiterungen für SEO und Checkout bleiben erhalten.

Erstellen und prüfen:

```sh
npm ci --ignore-scripts
npm run build:js
npm run test:guarantees
```

Die sechs Builds umfassen Entwicklung/Produktion, Basis/Checkout, Client und
Server. Größenhinweise der Produktionsbundles sind keine Buildfehler.

In Plenty vor dem Hinzufügen die Plugin-JSON auf `name` und `namespace`
Waldorfshop8 prüfen. Anschließend muss ein eigener Git-Eintrag ohne vorherige
Plugin-Set-Zuordnungen entstehen. Die Verknüpfung von Waldorfshop7 erneut
lesend prüfen. Ausschließlich im nicht live verknüpften Set 437 installieren,
aktivieren und zwischen Waldorfshop7 und WaldorfshopErweiterungen einsortieren.
Danach nur 437 bereitstellen, dessen ShopBuilder-Inhalte neu generieren und
Desktop/Mobil, Garantie/Variantenwechsel, Warenkorb und Checkout prüfen.

Der bekannte Registrierungsfehler `googleRecaptchaApiKey is not defined`
gehört nicht zu dieser Änderung und bleibt vor jeder Live-Freigabe anzusprechen.
