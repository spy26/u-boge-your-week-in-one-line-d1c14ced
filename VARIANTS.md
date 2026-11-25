# VARIANTS — Your Week in One Line

Slug: `u-boge-your-week-in-one-line-d1c14ced`
Juri: comedy editor, z-ai/glm-5.3-flash, pairwise dua arah (tiap game 2 call,
satu per urutan), 3 ronde Swiss + playoff top 12.
Kriteria juri (urut): (1) satu baris yang merangkum minggu entrant sendiri —
win, fail, atau chaos; (2) joke nyata / turn of phrase tajam, bukan sekadar
menyatakan perasaan; (3) satu detail konkret minggu itu (hal yang terjadi,
orang, tempat) sehingga baris itu hanya bisa jadi minggu itu; (4) tiap kata
berguna di dalam 100 karakter, tanpa padding dan tanpa yang hilang; (5) segar,
bukan pepatah atau template yang sudah sering dibaca.
Aturan tambahan: teks yang ditujukan ke juri diizinkan; entri yang byte-identik
dengan teks house (anchor/rung) tidak dapat hadiah. Tie-break: teks lebih kecil
(byte lebih sedikit) menang atas rate sama, lalu receipt lebih awal.
Skor /50: C1 minggu sendiri /10, C2 joke/turn tajam /15, C3 detail konkret /10,
C4 tiap kata berguna /10, C5 segar /5.
Panjang dihitung via script (karakter Python `len()`, byte UTF-8) — bukan kira-kira.

## Scan field (25 Nov 2026 ~09:20 WIB)

- 314 submission terdaftar saat build; SEMUA 314 judul terlihat lewat API
  (`subs-full.json`) — judul-judul itu sebagian besar adalah teks entry itu
  sendiri, jadi scan teks field MUNGKIN di kompetisi ini.
- Pola yang JENUH dan dihindari: "N bounties, zero wins / zero dollars"
  (puluhan entri: "86 bounties, zero dollars", "Fifty entries, zero wins, still
  shipping", "136 bids, zero wins", "160 bounty entries, zero wins..."),
  "leaderboard owes me rent" (3x), houseplant ("houseplant judging me",
  "plant died Monday"), toaster (3x), fridge/therapy ("The Fridge Thinks It's
  a Therapist"), "still shipping", "still refreshing the leaderboard".
- TIDAK ADA satu pun entri tentang: deploy token / staking / indexer, Polyester
  / VIP tier / paper trading, Candy streak. Sudut Aura (5 token, 75 stake,
  indexer 0) dan sudut Polyester (VIP 3, $60K volume kertas) keduanya segar.
- Varian "49 bug reports, zero wins" DITOLAK di draft awal karena jatuh ke pola
  jenuh yang sama ("Filed 139 bounties, fixed 22 rejections...").
- Risiko duplikat byte-identik: kecil untuk V2 — angka spesifik 5 token +
  75 stake + "indexer still says zero" adalah detail minggu ACE sendiri yang
  tidak mungkin ditulis orang lain kata-per-kata.

## Varian (semua satu baris, ASCII murni, ≤100 karakter)

| Varian | Teks | Karakter | C1 | C2 | C3 | C4 | C5 | Total /50 |
|---|---|---|---|---|---|---|---|---|
| V2 ★ | Deployed five tokens, staked seventy-five times, and the indexer still says zero. | 81 | 9 | 13 | 10 | 9 | 5 | **46** |
| V7 | Five tokens live, seventy-five stakes on-chain, and the indexer still says zero. | 80 | 9 | 13 | 10 | 8 | 5 | 45 |
| V8 | Deployed five tokens, staked seventy-five times, and the indexer gave me nothing. | 81 | 9 | 11 | 10 | 9 | 5 | 44 |
| V1 | Chased VIP 3 all week: $60,000 of paper trades, and my equity still went down. | 78 | 9 | 12 | 9 | 9 | 4 | 43 |
| V4 | Traded $120,000 of paper money in a day and lost real sleep over it. | 68 | 8 | 12 | 9 | 9 | 4 | 42 |
| V5 | Five tokens deployed, seventy-five stakes, zero indexed - the blockchain ghosted me. | 84 | 8 | 12 | 10 | 8 | 4 | 42 |
| V9 | Paper-traded my way to VIP 2, then watched the equity slide and called it progress. | 83 | 9 | 11 | 8 | 8 | 4 | 40 |
| V6 | My week: three wallets, one VIP tier, and an indexer that still thinks I don't exist. | 85 | 8 | 11 | 8 | 7 | 4 | 38 |
| V3 | Monday I had a plan. By Friday the plan had filed a bug report against me. | 74 | 8 | 12 | 5 | 9 | 3 | 37 |
| V10 | Fixed the bug, broke the build, apologised to the tests, and called it a week. | 78 | 7 | 10 | 4 | 9 | 2 | 32 |

### V2 — lima token, 75 stake, indexer nol — 81 karakter — 46/50 ★ TERPILIH

> Deployed five tokens, staked seventy-five times, and the indexer still says zero.

- C1 9: minggu ACE sendiri — deploy + staking Aura sepanjang minggu, ditutup
  hasil nol dari indexer. Minus 1 karena "minggu" tidak disebut harfiah, tapi
  rangkuman kerja seminggu penuh jelas.
- C2 13: "the indexer still says zero" — turn tajam: mesin yang seharusnya
  mencatat justru yang memberi vonis nol; personifikasi indexer sebagai juri
  yang diam. Bukan sekadar perasaan ("capek", "gagal").
- C3 10: tiga angka konkret yang hanya bisa jadi minggu ini — five tokens,
  seventy-five times, zero. Semua faktual (Aura: 5 token ter-deploy, 75 stake
  on-chain, indexer masih 0 pada 24 Nov).
- C4 9: tiap kata bekerja — "Deployed... staked..." dua kata kerja paralel,
  "still" memberi durasi (bukan sekali gagal, melainkan terus nol).
- C5 5: tidak ada entri field yang menyentuh token/indexer/staking.
- Tie-break: 81 byte.

### V7 — frasa nomina — 80 karakter — 45/50

> Five tokens live, seventy-five stakes on-chain, and the indexer still says zero.

- Sama kuat di C1–C3 dan C5, tapi C4 8: pembuka nomina ("Five tokens live")
  ritmenya lebih datar daripada dua kata kerja paralel V2; "on-chain" menambah
  presisi tapi mematahkan alur. Kalah 1 poin; 1 byte lebih kecil tidak
  menebus selisih skor.

### V8 — "gave me nothing" — 81 karakter — 44/50

> Deployed five tokens, staked seventy-five times, and the indexer gave me nothing.

- C2 11: "gave me nothing" lebih datar dari "still says zero" — "says zero"
  memberi angka spesifik dan suara pada indexer; "nothing" abstrak.

### V1 — kejar VIP 3 — 78 karakter — 43/50

> Chased VIP 3 all week: $60,000 of paper trades, and my equity still went down.

- C2 12: "paper trades... equity still went down" — ironi nyata (rugi dari uang
  yang tidak ada). C3 9: VIP 3 + $60,000 konkret. Kalah dari V2 karena tidak
  ada punchline sekuat "indexer still says zero" dan "equity went down" lebih
  datar sebagai penutup.

### V4 — $120K sehari — 68 karakter — 42/50

> Traded $120,000 of paper money in a day and lost real sleep over it.

- C1 8: "in a day" mempersempit ke satu hari, bukan seminggu. C2 12: kontras
  "paper money" vs "real sleep" tajam. Faktualitas lebih lemah ("lost real
  sleep" tidak harfiah) — V2 semua klaimnya faktual.

### V5 — "ghosted" — 84 karakter — 42/50

> Five tokens deployed, seventy-five stakes, zero indexed - the blockchain ghosted me.

- C2 12: "ghosted" turn yang bagus tapi kata yang sudah jadi template umum;
  C1 8: "ghosted me" menggeser fokus ke perasaan. Em-dash memecah ritme.

### V9 — VIP 2 — 83 karakter — 40/50

> Paper-traded my way to VIP 2, then watched the equity slide and called it progress.

- C2 11: "called it progress" turn yang lumayan tapi datar; C4 8:
  "Paper-traded my way to" bertele-tele; C3 8: VIP 2 konkret tapi tanpa angka.

### V6 — "My week:" — 85 karakter — 38/50

> My week: three wallets, one VIP tier, and an indexer that still thinks I don't exist.

- C4 7: label "My week:" adalah padding; "still thinks I don't exist"
  bertele-tele dibanding "still says zero". C3 8: "three wallets, one VIP tier"
  lebih samar daripada angka 5/75.

### V3 — rencana Senin–Jumat — 74 karakter — 37/50

> Monday I had a plan. By Friday the plan had filed a bug report against me.

- C2 12: reversal "plan filed a bug report against me" bagus, tapi C3 5: NOL
  detail konkret (tanpa angka, benda, orang, tempat). C5 3: kerangka
  Monday/Friday plan-collapse adalah template yang sudah sering dibaca.

### V10 — generik — 78 karakter — 32/50

> Fixed the bug, broke the build, apologised to the tests, and called it a week.

- C3 4: tanpa detail konkret; C5 2: field sudah punya "fixed the bug, broke
  the fix, blamed the update nobody installed" — nyaris duplikat pola.
