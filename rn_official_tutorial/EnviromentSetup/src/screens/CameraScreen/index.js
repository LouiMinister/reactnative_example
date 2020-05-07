'use strict';

import { RNCamera } from 'react-native-camera'
import * as RNFS from 'react-native-fs';

import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react';


const CameraScreen = ({navigation}) => {
    let camera;
 
    const [imgPath, setImgPath] = useState("");

    const remove_path_prefix = (path) => { 
        const prefix = "file://";
        return path.slice( path.indexOf(prefix)+ prefix.length);
    }

    const takePicture = async () => {
        if (camera) {
          const options = { quality: 0.5, base64: true };
          const data = await camera.takePictureAsync(options);
          console.log(remove_path_prefix(data.uri));
          setImgPath(remove_path_prefix(data.uri));
        }
    };

    const clearFiles = async () =>{
        const image_cache = `${RNFS.CachesDirectoryPath}/Camera`
        RNFS.unlink(image_cache).then(res => {
            console.log(`delete ${image_cache}`);
        }).catch(err => {
            console.log('error');
        });
    }

    const postImage = async () => {
        const uri = "https://basmtest.ktbcredit.com:8443/api/flutter";
        console.log("post");

        const files =[
            {
                name: 'img',
                filename: 'test.png',
                filepath: imgPath,
                filetype: 'application/octet-stream',
            },
        ];

        RNFS.uploadFiles({
            toUrl : uri,
            files: files,
            method: 'POST',
        }).promise.then((response)=> {
            if (response.statusCode == 200) {
                console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
              } else {
                console.log('SERVER ERROR');
              }
        }).catch((err)=>{
            console.log(err);
        });
    };

    return(
        <>
        <Text>CAMERA</Text>
        <View style={styles.container}>
            <RNCamera
            ref={ref => {
                camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
            }}
            />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>takePicture()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>clearFiles()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Clear </Text>
          </TouchableOpacity>
        {imgPath != "" && (
          <TouchableOpacity onPress={()=>postImage()} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> Post! </Text>
          </TouchableOpacity>
        )}
        </View>
      </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
  

export default CameraScreen;