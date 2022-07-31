# 03-GameDuo

# 💡 소개
**보스레이드 PVE 컨텐츠 API 서버**  
`프로젝트 진행 기간 2022.07.11 ~ 2022.07.15`

# ⛏ Skill
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">  
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">

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

