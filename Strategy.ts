class LoginService {
  private strategy: OauthStrategy;

  constructor(strategy: OauthStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: OauthStrategy) {
    this.strategy = strategy;
  }

  public login(): void {
    console.log("로그인 로직을 시작합니다");

    if (this.strategy.verfiy("username", "password")) {
      console.log("로그인 성공!");
      console.log("===================");
    }
  }
}

interface OauthStrategy {
  verfiy(username: string, password: string): boolean;
}

class KakaoStrategy implements OauthStrategy {
  verfiy(username: string, password: string): boolean {
    console.log("Kakao 소셜 로그인 진행 완료");
    return true;
  }
}

class NaverStrategy implements OauthStrategy {
  verfiy(username: string, password: string): boolean {
    console.log("Naver 소셜 로그인 진행 완료");
    return true;
  }
}

const loginService = new LoginService(new KakaoStrategy());
loginService.login();
loginService.setStrategy(new NaverStrategy());
loginService.login();
