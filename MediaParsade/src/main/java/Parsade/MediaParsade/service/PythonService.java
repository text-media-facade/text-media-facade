package Parsade.MediaParsade.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.*;

@Slf4j
@Service
public class PythonService {
    static Long sequence = 0L;

    public String runPythonCode(String selection){
        // 파이썬 실행 환경 변수 설정
        String pythonPath = "C:\\Users\\whang.DESKTOP-B4AS3S1\\anaconda3\\python.exe"; // 파이썬 실행 파일의 경로


        try {
            // .py 파일 생성
            sequence++;
            File pythonFile = new File("C:\\Users\\whang.DESKTOP-B4AS3S1\\Desktop\\학술제\\백엔드\\파이썬 스크립트 파일" +
                    "\\my_python_script" + sequence + ".py");
            FileWriter fileWriter = new FileWriter(pythonFile);
            fileWriter.write(selection);
            fileWriter.close();

            // .py 파일의 경로
            String pythonFilePath = pythonFile.getAbsolutePath();


            ProcessBuilder processBuilder = new ProcessBuilder(pythonPath, pythonFilePath);
            Process process = processBuilder.start();
            // 파이썬 프로세스의 출력을 읽어옴
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }
            int exitCode = process.waitFor(); // 파이썬 프로세스의 종료를 기다림
            log.info("output={}",output.toString());
            if (exitCode == 0) {
                return output.toString(); // 파이썬 코드의 출력을 반환
            } else {
                log.info("exitCode={}",exitCode);
                return null;
            }
        } catch (IOException | InterruptedException e) {
            log.info("python exception");
            return null;
        }
    }

    public void deletePythonScript(){
        try {
            File file = new File("C:\\Users\\whang.DESKTOP-B4AS3S1\\Desktop\\학술제\\백엔드\\파이썬 스크립트 파일" +
                    "\\my_python_script" + sequence + ".py");

            if (file.exists()) {
                file.delete();
            }

        }catch (Exception e){
            log.info("exception={}", e);
        }
    }


}
