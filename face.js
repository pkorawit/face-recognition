const fr = require('face-recognition')
const recognizer = fr.FaceRecognizer()
const detector = fr.FaceDetector()

const image1 = fr.loadImage('korn1.jpg')
const image2 = fr.loadImage('korn2.jpg')
const image3 = fr.loadImage('korn3.jpg')
const image4 = fr.loadImage('yuki1.jpg')
const image5 = fr.loadImage('yuki2.jpg')
const image6 = fr.loadImage('yuki3.jpg')
const image7 = fr.loadImage('kornyuki.jpg')


console.log('detecting faces...')
const faceSize = 150
const facesK = detector.detectFaces(image1, faceSize).concat(detector.detectFaces(image2, faceSize)).concat(detector.detectFaces(image3, faceSize))
const facesY = detector.detectFaces(image4, faceSize).concat(detector.detectFaces(image5, faceSize)).concat(detector.detectFaces(image6, faceSize))

const newFaces = detector.detectFaces(image7, faceSize)

const win = new fr.ImageWindow()
win.setImage(fr.tileImages(facesK.concat(facesY)))
fr.hitEnterToContinue()

recognizer.addFaces(facesK, 'Korn')
recognizer.addFaces(facesY, 'Yuki')

const win2 = new fr.ImageWindow()
win2.setImage(fr.tileImages(newFaces))
fr.hitEnterToContinue()

console.log('Recognizing face...')
for(var i=0;i<newFaces.length;i++){
    const predictions = recognizer.predict(newFaces[i])
    console.log(predictions)
}
