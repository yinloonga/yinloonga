const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `${progressBar}`
}

const beijingTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false })

const readme = `\
### Hi there 👋
| Year progress | Top Langs | WakaTime (One Month) |
| --- | --- | --- |
| <div>⏳ Year progress: <br> ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % <br> <br>⏰ Updated on ${beijingTime} <br>![Progress Bar CI](https://github.com/yinloonga/yinloonga/actions/workflows/main.yml/badge.svg)</div> | 
![Top Langs](https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=yinloonga&layout=compact&theme=dark&role=OWNER,ORGANIZATION_MEMBER,COLLABORATOR) | 
<img src="https://wakatime.com/share/@yinloonga/f920780c-f365-4860-b2d0-04bf2840a3f5.svg" width="80%" height="80%" /> |\
`

console.log(readme)
