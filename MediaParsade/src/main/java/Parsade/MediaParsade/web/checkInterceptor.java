package Parsade.MediaParsade.web;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

@Slf4j
public class checkInterceptor implements HandlerInterceptor {


    // 인터셉터로 세션 존재 여부 및 세션 저장소에 등록된 세션인지 검증
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String reqURI = request.getRequestURI();

        HttpSession session = request.getSession(false);

        if(session == null || session.getAttribute("loginMember") == null){
            log.info("미인증 사용자 요청");
            response.sendRedirect("/login");
            return false;
        }

        return true;

    }
}
