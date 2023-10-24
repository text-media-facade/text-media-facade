package Parsade.MediaParsade;

import Parsade.MediaParsade.web.checkInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class webConfig implements WebMvcConfigurer {
    
    
    // 인터셉터 등록, 인터셉터 미적용 패턴 기본 3가지 + 로그인 페이지
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new checkInterceptor())
                .order(1)
                .addPathPatterns("//**")
                .excludePathPatterns("/css/**", "/*.ico", "/error", "/login");
    }
}
