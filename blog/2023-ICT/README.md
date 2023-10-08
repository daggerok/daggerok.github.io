# ICT
This is my ICT notes. I started learn it this (2023) year, but topic is quite big and complex, so I feel
that I should make some notes about it

## Glossary and acronyms

* **Buyside Liquidity** (BL)
* **Buyside Imbalance Sellside Inefficiency** (BISI)
* **Sellside Liquidity** (SL)
* **Sellside Imbalance Buyside Inefficiency** (SIBI)
* **Regular Trading Hours** (RTH). Hours when algorithm is delivering price to **SMT**
* **Electronic Trading Hours** (ETH). All available trading hours on a chart
* **Liquidity Viod** (LV). Gap between two candels where no trading at all, for example between **NWOGap High** and **NWOG Low**
* **Market Sructure Shift** (MSS). Bullish MSS, Bearish MSS
* [**New Week Opening Gap** (NWOG)](https://www.youtube.com/live/LoXPDfFoLSc?si=Ob_gRATBCm7Fgm2W&t=1251). Gap between
  close price of previous Friday at 4:30pm and open price of previous Sunday at 6pm
* **New Week Opening Gap High** (NWOG High). Example: Sun 01 Oct '23 6pm
* **New Week Opening Gap Consequent Encuragment** (NWOG C.E.). Mid point of the gap
* **New Week Opening Gap Low** (NWOG Low). Example: Fri 29 Sep '23 4:30pm
* **New Day Opening Gap** (NDOG). Distance between 5pm and opening 6pm
* [**Opening Range Gap** (ORG)](https://www.youtube.com/live/LoXPDfFoLSc?si=Gp6dGyGANROcwTpQ&t=1327). Where we have
  relation between **RTH**
* **Opening Range Gap Settlement** (ORG Settlement). Previous day close price on **RTH**. Word Settlement is going to
  be changed in a moment where market price is opened at 9:30am... If current price is opened above
  **ORG Settlement**, then we should change **ORG Settlement** to **ORG Low**, otherwise **ORG Settlement** must be
  changed to **ORG High** as far opening price is under the **RTH** previously closed price
* **Optimal Trade Entry** (OTE) [using Breaking Market Structure](https://www.youtube.com/watch?v=aQrd75xwBS4)
* **Silver Bullet** (SB). 1-hour time interval where a **FVG** can be touched: 10am-11am, 1pm-2pm
* **Smart Money** (SM)
* **Smart Money Concepts** (SMC)
* **Smart Money Traders** (SMT)
* **Stop Raid** (SR)

## Rules

* Trade from Monday till Friday
* Do not trade on Thursday and Friday in between 8am and 10am
* Every gap or inefficiency should delivered (filled) with both up and down price actions. So if Buyside delivery (when
  marked goes up) occurred it reasonable expect that later Sellside delivery is also going to be done eventually
* In most cases in 8:30am when news are came out the first run whatever that direction is in price that is the fake
  move - that is a first stage delivery. The second stage is the opposite is whatever that is meaning we will see price
  do reversal.
  For example:
  ![Fake move on MNQZ2023 on Fri Oct 06 '23 at 8:30am](MNQZ2023-Fri-Oct-06-at-8-30-am-1st-stage.png)
  Here everybody thinking: "okay, it's gonna go lower" and it's crashes everyone that's already in long... And it did so
  in stunning fashion very quickly, which scares everyone in a marketplace, it terrifies them! ...Then the market does
  a second stage: what the 8:30am news sentiment shift caused everyone to think that it would keep going lower and keep
  going lower... They trapped them short and then they run against the move that took place in the morning:
  ![SMT price delivery move on MNQZ2023 on Fri Oct 06 '23 at 9:00am](MNQZ2023-Fri-Oct-06-at-9-00-am-2nd-stage.png)

## NWOG
New Week Opening Gap
![NWOG MNQ1!](./NWOG-MNQ1!.png)
