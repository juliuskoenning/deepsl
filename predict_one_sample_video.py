from utils.detect_sign import predict_one_path, setup_prediction_model

setup_prediction_model()
results = predict_one_path(
    r"C:\Users\Phili\Desktop\Uni_Projekte\SignLanguageDetection\App\Demo\philipp_demo.mp4"
)
print(results)
