const { useState } = React;

const days = [
  {
    day: 1, date: "22.5", weekday: "חמישי",
    mapQuery: "Kaisertal+Austria",
    theme: "מינכן ← קייזרטל ← זלצבורג",
    emoji: "✈️",
    color: "#5B8E7D",
    morning: ["12:30 נחיתה מינכן + קבלת רכב", "קייזרטל – עמק ללא מכוניות (45 דק' מהנמל)", "280 מדרגות Kaiseraufstieg", "כנסיית Antonius הפוטוגנית", "בתי קפה כפריים מקומיים"],
    afternoon: ["זלצבורג 16:00–20:00", "Getreidegasse + קפה מקומי", "קתדרלה + כיכר Residenzplatz", "גני Mirabell", "גשר המנעולים Makartsteg", "שקיעה מ-Kapuzinerberg"],
    evening: ["ארוחת ערב בעיר", "Motel One Salzburg-Süd"],
    hotel: "Motel One Salzburg-Süd",
    gf: "Triangel, Carpe Diem",
    distance: "מינכן←זלצבורג: 145 ק\"מ | 1.5 שעות",
    tip: "לרכוש מדבקת כבישים (Vignette) לאוסטריה בתחנת דלק לפני הגבול"
  },
  {
    day: 2, date: "23.5", weekday: "שישי",
    theme: "Salzachöfen + Gosausee",
    emoji: "🏔️",
    color: "#4A7C8E",
    mapQuery: "Gosausee+Austria",
    morning: ["07:30 הלשטאט לפני הפקקים", "09:00 נקיק Salzachöfen (30 דק' מזלצבורג)", "חצוב לעומק 90 מ', צר עד כמה מטרים", "דום טבעי מסלעים – כמעט מערה", "3 יורו כניסה, שעה-שעתיים הליכה", "11:30 Golling – ארוחת צהריים בגשטהוף מקומי"],
    afternoon: ["14:00 Gosausee", "Vorderer + Hinterer Gosau", "קרחון Dachstein ברקע", "הגדה הימנית עד סוף האגם הראשון", "השתקפות הקרחון במים – מושלמת!"],
    evening: ["17:30 נסיעה לאבנטאו (20 דק')", "ארוחת ערב שקטה", "Frauenzimmer by Townhouse"],
    hotel: "Frauenzimmer by Townhouse – אבנטאו",
    gf: "Bräugasthof, Golling",
    distance: "זלצבורג←Salzachöfen: 40 ק\"מ | ←Gosausee: 25 ק\"מ | ←אבנטאו: 20 ק\"מ",
    tip: "אין הלשטאט – פחות תיירותי, יותר יפה!"
  },
  {
    day: 3, date: "24.5", weekday: "שבת",
    theme: "🎂 יום הולדת! Hohenwerfen + Zell am See",
    emoji: "🎂",
    color: "#8E5B7D",
    mapQuery: "Zell+am+See+Austria",
    morning: ["09:30 טירת Hohenwerfen – הגעה מוקדמת", "11:15 מופע הבזים (חובה לאוהבי בעלי חיים!)", "13:30 נקיק זיגמונד-טון (קפרון)", "סיור שעה בנקיק הטורקיז"],
    afternoon: ["צ'ק-אין למלון – כרטיב חינמי לרכבל", "15:30 Schmittenhöhe – עלייה ברכבל", "תצפית '30 הפסגות' (מעל 3,000 מ')", "הרכבל חינם עם כרטיס המלון!"],
    evening: ["ארוחת ערב מיוחדת ליום הולדת 🎉", "Aparthotel Zell am See – נוף לאגם"],
    hotel: "Aparthotel Zell am See – נוף לאגם",
    gf: "Kupferkanne, Zell am See",
    distance: "אבנטאו←Hohenwerfen: 20 ק\"מ | ←Zell am See: 30 ק\"מ",
    tip: "מופע הבזים ב-11:15 – זמן מושלם!"
  },
  {
    day: 4, date: "25.5", weekday: "ראשון",
    theme: "יום הגבהים הגדול",
    emoji: "⛰️",
    color: "#6B7E4A",
    mapQuery: "Grossglockner+High+Alpine+Road+Austria",
    morning: ["07:30 סכר Kaprun – חובה: בגדי חורף + כפפות + כובע!", "חניון קומה 11", "אוטובוס ← רכבל פתוח ← אוטובוס", "4 שעות כולל נסיעות", "תצפית עליונה – מחייב!"],
    afternoon: ["12:00 Grossglockner High Alpine Road", "הכביש הפנורמי היפה ביותר באלפים", "חובה: Edelweissspitze (הנקודה הגבוהה ביותר ברכב)", "Franz-Josef-Höhe – קרחון Pasterze", "מרמיטות! 🦔"],
    evening: ["17:30 חזרה למלון", "ארוחת ערב שקטה", "Aparthotel Zell am See"],
    hotel: "Aparthotel Zell am See",
    gf: "להצטייד בחטיפי GF מהמלון",
    distance: "Zell am See←סכר: 10 ק\"מ | ←גרוסגלוקנר: 15 ק\"מ | דרך פנורמית: 48 ק\"מ",
    tip: "לבדוק www.grossglockner.at לפני היציאה"
  },
  {
    day: 5, date: "26.5", weekday: "שני",
    theme: "Krimml → Rattenberg",
    emoji: "💧",
    color: "#4A6B8E",
    mapQuery: "Krimml+Waterfalls+Austria",
    morning: ["08:30 מפלי Krimml (35 ק\"מ מ-Zell am See)", "הגבוהים באירופה – 380 מ'!", "3 רמות מרהיבות", "2.5-3 שעות בנחת", "~6-8 יורו כניסה"],
    afternoon: ["12:00 מעבר Gerlos Pass", "תצפיות פנורמיות בדרך", "Gerlos Stausee – מים טורקיז", "14:30 Rattenberg", "העיר הקטנה באוסטריה (400 מ' אורך!)", "חנויות זכוכית מפורסמות, רחובות מהמאה ה-13"],
    evening: ["17:00 צ'ק-אין + סיור קצר בעיר", "ארוחת ערב על נהר Inn", "Boutiquehotel Rattenberg"],
    hotel: "Boutiquehotel Rattenberg – בניין גותי מ-1500, דירוג 9.6",
    gf: "ברברה מגישה ארוחת בוקר אזורית בעצמה",
    distance: "Zell am See←Krimml: 35 ק\"מ | ←Gerlos: 45 ק\"מ | ←Rattenberg: 70 ק\"מ",
    tip: "חלופת גשם: מכרות הכסף Silver Mine ב-Schwaz"
  },
  {
    day: 6, date: "27.5", weekday: "שלישי",
    theme: "מחלבה + אגם Achensee – יום רגוע",
    emoji: "🧀",
    color: "#8E7D4A",
    mapQuery: "Achensee+Pertisau+Austria",
    morning: ["08:30 יציאה מ-Rattenberg", "09:00 נקיק Wolfsklamm (Stans)", "מדרגות עץ לאורך מפל", "מגיעים לכנסייה למעלה – שעה וחצי", "11:30 מחלבת Erlebnis Sennerei Zillertal", "סיור עצמאי + טעימות גבינות + ארוחת צהריים"],
    afternoon: ["13:30 נסיעה לאגם Achensee (45 דק')", "14:15 צ'ק-אין מהיר", "Karwendelbahn – רכבל לגובה 1,780 מ'", "תצפית על האגם וההרים", "או: הליכה לאורך שפת האגם", "או: סירת משוטים/קיאק 🚣"],
    evening: ["שקיעה מהמרפסת", "ארוחת ערב במלון או בכפר Pertisau", "Seehotel Einwaller – ספא גג + נוף לאגם"],
    hotel: "Seehotel Einwaller, Pertisau – מזח פרטי, ספא גג, מבוגרים בלבד",
    gf: "Sennereiküche במחלבה",
    distance: "Rattenberg←Stans: 30 ק\"מ | ←Mayrhofen: 25 ק\"מ | ←Achensee: 45 ק\"מ",
    tip: "חלופת גשם: עולם הקריסטלים של סברובסקי"
  },
  {
    day: 7, date: "28.5", weekday: "רביעי",
    theme: "Hall in Tirol + אינסברוק",
    emoji: "🏰",
    color: "#7D4A5B",
    mapQuery: "Innsbruck+Austria",
    morning: ["09:00 Hall in Tirol (20 דק' מהמלון)", "עיר עתיקה שרוב התיירים מחמיצים", "מגדל המטבע Münzerturm", "רחובות צבעוניים + שוק קטן", "אווירה אמיתית ללא תיירות המונית", "11:00 הגעה לאינסברוק"],
    afternoon: ["12:00 העיר העתיקה", "הגג הזהב Goldenes Dachl", "ארמון Hofburg", "Maria-Theresien-Straße", "14:30 Nordkettenbahn → Hafelekar", "רכבל ממרכז העיר ל-2,300 מ'!", "תצפית 360° על אינסברוק"],
    evening: ["18:00 ערב חופשי", "רחובות העיר העתיקה", "גשר Innbrücke", "מסעדה לבחירה", "Altstadthotel Weisses Kreuz"],
    hotel: "Altstadthotel Weisses Kreuz – אינסברוק",
    gf: "Lichtblick (קומה 7), עוגות – Café Munding",
    distance: "Pertisau←Hall: 50 ק\"מ | ←אינסברוק: 10 ק\"מ",
    tip: "חלופה: עולם הקריסטלים של סברובסקי (20 דק')"
  },
  {
    day: 8, date: "29.5", weekday: "חמישי",
    theme: "יום נסיעות ארוך → פוסן",
    emoji: "🌉",
    color: "#5B4A8E",
    mapQuery: "Highline179+Reutte+Austria",
    morning: ["09:00 יציאה מאינסברוק", "10:00 נקיק Leutaschklamm", "גשרי פלדה תלויים מעל נהר גועש", "מסלול מעגלי ~שעה וחצי", "12:30 Mittenwald – עיירת הציורים", "Lüftlmalerei – כל הבתים מצוירים", "ארוחת צהריים בעיר העתיקה"],
    afternoon: ["14:30 Highline 179 (ליד Reutte)", "גשר החבלים התלויים הארוכים בעולם", "מחבר בין שתי מצודות עתיקות", "עלייה במיני-פוניקולר"],
    evening: ["17:00 הגעה לפוסן + צ'ק-אין", "שיטוט בעיר העתיקה", "ארוחת ערב בפוסן", "Hotel Sonne – לב העיר"],
    hotel: "Hotel Sonne – פוסן, לב האקשן",
    gf: "מאפיות ב-Reichenstraße",
    distance: "אינסברוק←St. Anton: 100 ק\"מ | ←Lech: 30 ק\"מ | ←Feldkirch: 90 ק\"מ",
    tip: "בגשר יש פוניקולר לעלייה – לחסוך את ההליכה"
  },
  {
    day: 9, date: "30.5", weekday: "שישי",
    theme: "טירת Neuschwanstein → Füssen",
    emoji: "🏯",
    color: "#4A8E6B",
    mapQuery: "Neuschwanstein+Castle+Germany",
    morning: ["08:30 צ'ק-אאוט + נסיעה קצרה", "עלייה בשאטל/כרכרה לטירת Neuschwanstein", "תצפית מגשר Marienbrücke – חובה!", "סיור בטירה (הוזמן מראש – 10:00)", "כרטיסים נרכשו לשעה 10"],
    afternoon: ["12:30 ירידה לאגם Alpsee", "הליכה מישורית על שפת המים", "14:30 כנסיית Wies (UNESCO)", "'הקפלה הסיסטינית של בוואריה'", "16:30 חזרה ל-Schwangau + צ'ק-אין"],
    evening: ["שיטוט בין הטירות המוארות", "אחרי שכל התיירים עוזבים – קסום! ✨", "ארוחת ערב בווארית אותנטית במלון", "Hotel Müller – בין שתי הטירות"],
    hotel: "Hotel Müller, Schwangau – משפחתי, בין שתי הטירות",
    gf: "מאפיות ב-Reichenstraße",
    distance: "פוסן←Lindau: 10 ק\"מ | ←Füssen: 60 ק\"מ",
    tip: "הטירות המוארות בערב – קסומות ללא עומס תיירים"
  },
  {
    day: 10, date: "31.5", weekday: "שבת",
    theme: "Wies + Oberammergau ✈ חזרה",
    emoji: "🛫",
    color: "#8E6B4A",
    mapQuery: "Oberammergau+Germany",
    morning: ["08:00 יציאה מ-Schwangau", "אגם Plansee – נסיעה על קו המים", "ארמון Linderhof – הגנים המטורפים", "מזרקה פועלת כל שעה עגולה", "10:30 מנזר Ettal – גבינות וליקרים"],
    afternoon: ["10:00 Oberammergau (20 דק')", "כל בית מצויר מהרצפה לגג", "שעה-שעתיים: הליכה, קפה, צהריים", "15:00 נסיעה לשדה התעופה", "עצירה ב-Starnberg – 10 דק' על הטיילת"],
    evening: ["17:00 שדה תעופה מינכן", "20:00 טיסה חזרה 🏠", "GF בשדה: Terminal 2T – יש אפשרויות"],
    hotel: "טיסה הביתה",
    gf: "שדה תעופה Terminal 2T",
    distance: "Schwangau←Wies: 20 ק\"מ | ←Oberammergau: 20 ק\"מ | ←מינכן: 90 ק\"מ",
    tip: "עצירה ב-Starnberg ממש על האוטוסטרדה בדרך לשדה"
  }
];

function TripApp() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [tab, setTab] = useState("morning");

  const day = selectedDay !== null ? days[selectedDay] : null;

  return (
    React.createElement("div", { style: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      fontFamily: "'Georgia', serif",
      direction: "rtl",
      color: "#e8e0d0"
    }},
      React.createElement("div", { style: {
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "24px 20px 20px",
        textAlign: "center"
      }},
        React.createElement("div", { style: { fontSize: 13, letterSpacing: 4, color: "#8E9B7D", marginBottom: 6 }}, "22–31 מאי 2025"),
        React.createElement("h1", { style: {
          margin: 0, fontSize: 28, fontWeight: 400,
          background: "linear-gradient(135deg, #d4c5a9, #8ecfba)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}, "🇦🇹 מסלול אוסטריה"),
        React.createElement("div", { style: { fontSize: 13, color: "#7a8a6a", marginTop: 4 }}, "10 ימים | עיירות, טבע, אוכל מקומי | GF ✓")
      ),

      React.createElement("div", { style: { padding: "20px 16px" }},
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }},
          days.map((d, i) =>
            React.createElement("button", {
              key: i,
              onClick: () => { setSelectedDay(i); setTab("morning"); },
              style: {
                background: selectedDay === i ? `linear-gradient(135deg, ${d.color}dd, ${d.color}88)` : "rgba(255,255,255,0.04)",
                border: selectedDay === i ? `1px solid ${d.color}` : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "14px 12px", cursor: "pointer",
                textAlign: "right", transition: "all 0.2s", color: "#e8e0d0"
              }
            },
              React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }},
                React.createElement("span", { style: { fontSize: 18 }}, d.emoji),
                React.createElement("div", { style: { textAlign: "right" }},
                  React.createElement("div", { style: { fontSize: 11, color: "#8a9a7a", marginBottom: 2 }}, `${d.weekday} ${d.date}`),
                  React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#b8c5a8" }}, `יום ${d.day}`)
                )
              ),
              React.createElement("div", { style: { fontSize: 12, lineHeight: 1.4, color: selectedDay === i ? "#fff" : "#c8bfa8" }}, d.theme)
            )
          )
        )
      ),

      day && React.createElement("div", { style: {
        margin: "0 16px 32px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 16,
        border: `1px solid ${day.color}44`,
        overflow: "hidden"
      }},
        React.createElement("div", { style: {
          background: `linear-gradient(135deg, ${day.color}cc, ${day.color}66)`,
          padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center"
        }},
          React.createElement("span", { style: { fontSize: 28 }}, day.emoji),
          React.createElement("div", { style: { textAlign: "right" }},
            React.createElement("div", { style: { fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}, `${day.weekday} ${day.date}`),
            React.createElement("div", { style: { fontSize: 15, fontWeight: 600, color: "#fff" }}, day.theme)
          )
        ),

        React.createElement("div", { style: { display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)" }},
          [
            { key: "morning", label: "🌅 בוקר" },
            { key: "afternoon", label: "☀️ אחה\"צ" },
            { key: "evening", label: "🌙 ערב" },
            { key: "info", label: "ℹ️ פרטים" },
            { key: "map", label: "🗺️ מפה" }
          ].map(t =>
            React.createElement("button", {
              key: t.key,
              onClick: () => setTab(t.key),
              style: {
                flex: 1, padding: "10px 4px", border: "none",
                background: tab === t.key ? `${day.color}44` : "transparent",
                color: tab === t.key ? "#fff" : "#8a9a7a",
                fontSize: 11, cursor: "pointer",
                borderBottom: tab === t.key ? `2px solid ${day.color}` : "2px solid transparent"
              }
            }, t.label)
          )
        ),

        React.createElement("div", { style: { padding: "16px 20px" }},
          tab !== "info" && tab !== "map" && React.createElement("ul", { style: { margin: 0, padding: 0, listStyle: "none" }},
            (tab === "morning" ? day.morning : tab === "afternoon" ? day.afternoon : day.evening).map((item, i) =>
              React.createElement("li", { key: i, style: {
                padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontSize: 14, lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 10
              }},
                React.createElement("span", { style: { color: day.color, flexShrink: 0, marginTop: 2 }}, "◆"),
                React.createElement("span", null, item)
              )
            )
          ),

          tab === "info" && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 }},
            React.createElement("div", { style: { background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 14, border: `1px solid ${day.color}33` }},
              React.createElement("div", { style: { fontSize: 11, color: day.color, marginBottom: 6 }}, "🏨 מלון"),
              React.createElement("div", { style: { fontSize: 14 }}, day.hotel)
            ),
            React.createElement("div", { style: { background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,0.08)" }},
              React.createElement("div", { style: { fontSize: 11, color: "#8E7D4A", marginBottom: 6 }}, "🚗 נסיעות"),
              React.createElement("div", { style: { fontSize: 13, lineHeight: 1.6 }}, day.distance)
            ),
            React.createElement("div", { style: { background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,0.08)" }},
              React.createElement("div", { style: { fontSize: 11, color: "#6B8E4A", marginBottom: 6 }}, "🌾 GF"),
              React.createElement("div", { style: { fontSize: 13 }}, day.gf)
            ),
            day.tip && React.createElement("div", { style: { background: `${day.color}22`, borderRadius: 10, padding: 14, border: `1px solid ${day.color}44` }},
              React.createElement("div", { style: { fontSize: 11, color: day.color, marginBottom: 6 }}, "💡 טיפ"),
              React.createElement("div", { style: { fontSize: 13, lineHeight: 1.6 }}, day.tip)
            )
          ),

          tab === "map" && React.createElement("div", { style: { borderRadius: 10, overflow: "hidden", height: 300 }},
            React.createElement("iframe", {
              title: "map",
              width: "100%",
              height: "300",
              style: { border: 0, borderRadius: 10 },
              src: `https://maps.google.com/maps?q=${day.mapQuery}&output=embed&hl=he&z=11`,
              allowFullScreen: true
            })
          )
        ),

        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }},
          React.createElement("button", {
            onClick: () => selectedDay > 0 && setSelectedDay(selectedDay - 1),
            disabled: selectedDay === 0,
            style: { background: "transparent", border: "none", color: selectedDay === 0 ? "#444" : "#8E9B7D", fontSize: 13, cursor: selectedDay === 0 ? "default" : "pointer" }
          }, "← יום קודם"),
          React.createElement("span", { style: { fontSize: 12, color: "#666" }}, `יום ${day.day} מתוך 10`),
          React.createElement("button", {
            onClick: () => selectedDay < 9 && setSelectedDay(selectedDay + 1),
            disabled: selectedDay === 9,
            style: { background: "transparent", border: "none", color: selectedDay === 9 ? "#444" : "#8E9B7D", fontSize: 13, cursor: selectedDay === 9 ? "default" : "pointer" }
          }, "יום הבא →")
        )
      ),

      !day && React.createElement("div", { style: { textAlign: "center", padding: "20px 20px 40px", color: "#5a6a4a", fontSize: 14 }},
        "לחצי על יום כדי לראות את הפרטים"
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(TripApp));
