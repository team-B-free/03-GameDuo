# 03-GameDuo

# 💡 소개
**보스레이드 PVE 컨텐츠 API 서버**  
`프로젝트 진행 기간 2022.07.11 ~ 2022.07.15`

# ⛏ Skill
<img alt ="icon" wide ="60" height="60" src="https://www.svgrepo.com/show/354118/nodejs.svg" /> <img alt ="icon" wide ="60" height="60" src="https://www.svgrepo.com/show/330398/express.svg" /> <img alt= "icon" wide="60" height="60" src ="https://techstack-generator.vercel.app/mysql-icon.svg" /> <img alt ="icon" wide ="60" height="60" src="https://www.svgrepo.com/show/374071/sequelize.svg" /> <img alt ="icon" wide ="60" height="60" src="https://www.svgrepo.com/show/354272/redis.svg" /> <img alt ="icon" wide ="60" height="60" src="https://www.svgrepo.com/show/306098/githubactions.svg" /> <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="60" height="60" />

# 요구 사항
### 1. 유저 관리
- 유저 생성
  - 중복되지 않는 userId 생성
  - 생성된 userId를 응답
- 유저 조회
  - 해당 유저의 보스레이드 총 점수와 참여기록 응답
### 2. 보스레이드 관리
- 보스레이드 상태 조회
  - 보스레이드 현재 상태 응답(canEnter: 입장 여부, enteredUserId: 진행중인 유저 id)
  - 입장 가능 조건(한 번에 한 명의 유저만 가능/시작한 유저가 종료했거나, 시작한 시간으로부터 레이드 제한 시간만큼 경과)
- 보스레이드 시작
  - 보스레이드 시작 응답(raidRecordId: 유니크한 레이드 방 id, isEntered: true)
  - 보스레이드 시작 불가 응답(isEntered: false)
- 보스레이드 종료
  - 보스레이드 종료 처리(레이드 level에 따른 score 반영)
  - 유효성 검사(userId, raidRecordId 일치하지 않으면 예외 처리)
  - 보스레이드 제한 시간(시작한 시간으로부 지나면 예외 처리)
- 보스레이드 랭킹 조회
  - 보스레이드 totalScore 내림차순 조회

# 업무 분업
| 이름 | EndPoint | 담당 API | 서비스 코드 |
| :---------------: | :---------------: | :---------------: | :---------------: |
| 강채현 | /api/user | 유저 생성 | [user.service](https://github.com/team-B-free/03-GameDuo/blob/main/src/services/user/user-service.js) |
| 김영우 | /api/bossRaid/enter | 보스레이드 시작 | [bossRaid.service](https://github.com/team-B-free/03-GameDuo/blob/main/src/services/bossraid/bossraid-service.js) |
| 박성용 | /api/bossRaid <br> /api/bossRaid/topRankerList | 보스레이드 상태 조회 <br/> 랭킹 조회 | [bossRaid.service](https://github.com/team-B-free/03-GameDuo/blob/main/src/services/bossraid/bossraid-service.js) <br/> [topRanker.module](https://github.com/team-B-free/03-GameDuo/blob/main/src/modules/ranking-data.js) |
| 최예진 | /api/bossRaid/end <br> /api/bossRaid/topRankerList | 보스레이드 종료 <br/> 랭킹 조회 | [bossRaid.service](https://github.com/team-B-free/03-GameDuo/blob/main/src/services/bossraid/bossraid-service.js) <br/> [topRanker.module](https://github.com/team-B-free/03-GameDuo/blob/main/src/modules/ranking-data.js) |
| 오주환 | /api/user/:id | 유저 조회 | [user.service](https://github.com/team-B-free/03-GameDuo/blob/main/src/services/user/user-service.js) |

# API 설계
👉[Click API 상세스펙](https://github.com/team-B-free/03-GameDuo/wiki)  
  
![game-duo](https://user-images.githubusercontent.com/67082984/182010655-191d180c-432d-4b94-a49c-b3bda70c85a3.png)

# DB ERD 설계
![game-duo-erd](https://user-images.githubusercontent.com/67082984/182010724-c18ade71-9909-4516-ac89-ae8f1fe7da2d.png)

# B-free TEAM
|                                 **강채현**                                 |                                    **김영우**                                    |                                  **박성용**                                   |                                   **최예진**                                   |                                 **오주환**                                 |
| :------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :------------------------------------------------------------------------: |
|                   [@KCH6937](https://github.com/KCH6937)                   |                [@whoamixzerone](https://github.com/whoamixzerone)                |                 [@StarFace90](https://github.com/StarFace90)                  |                 [@chldppwls12](https://github.com/chldppwls12)                 |                   [@juhwano](https://github.com/juhwano)                   |
| <br/><img src="https://avatars.githubusercontent.com/KCH6937" width="100"> | <br/><img src="https://avatars.githubusercontent.com/whoamixzerone" width="100"> | <br/><img src="https://avatars.githubusercontent.com/StarFace90" width="100"> | <br/><img src="https://avatars.githubusercontent.com/chldppwls12" width="100"> | <br/><img src="https://avatars.githubusercontent.com/juhwano" width="100"> |

# 환경변수(ENV)
.env 파일에 작성  
아래 내용은 예시입니다
```
NODE_ENV = development
DB_USER = local
DB_PASSWORD = local
DB_NAME = gameduo
DB_HOST = localhost
DB_DIALECT = mysql
DB_TIMEZONE = +09:00
REDIS_PORT = 6397
JWT_SECRET = jwt_secret
```

# 설치하기
```
$ git clone https://github.com/team-B-free/03-GameDuo.git
$ cd 03-GameDuo
$ npm install
```

# 실행하기
```
# production mode
$ npm start
```
