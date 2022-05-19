/* eslint-disable */
import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch } from "react-redux";
import { modalClose } from "../../store/modal/modal.actions";
import SvgUpload from "../../svg/Upload";
import Button from "../../components/button";
import Collapse from "../../components/collapse";
import File from "../../components/file";
import Input from "../../components/input";
import { buttonName, documentLabel } from "./load.utils";
import "./load.css";

export interface LoadModalProps {
  multi: boolean;
  label: string;
}

function LoadModal(props: LoadModalProps) {
  const { multi, label } = props;

  const [files, setFiles] = useState<string[]>([]);
  const [fileToClose, setFileToClose] = useState<string>();
  const [title, setTitle] = useState<string>(label);
  const [images, setImages] = useState<ImageListType>([]);

  const dispatch = useDispatch();

  const saveFiles = () => {
    dispatch(modalClose());
  };

  const onFileClick = (file: string) => {
    setFileToClose(file);
    setTimeout(() => {
      setFiles(files.filter((f: string) => f !== file));
    }, 450);
  };

  const onFileNameChange = (name: string, value: string) => {
    setTitle(value);
  };

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="load">
      <div className="load__content">
        <ImageUploading multiple maxNumber={5} value={images} onChange={onChange}>
          {({ onImageUpload }) => (
            <div className="load__main">
              <h6 className="load__head">{documentLabel(title, 2)}</h6>
              <div className="load__info">
                Wählen Sie hier nur Dateien/Photos Ihres Personalausweises/Reisepasses aus.
              </div>
              <div className="load__files">
                {files.map((file: string, index: number) => (
                  <Collapse key={file} opened={fileToClose !== file} duration={300}>
                    <div
                      className="load__file"
                      style={{ marginTop: index === 0 ? 10 : 0, marginBottom: files.length - 1 >= index ? 10 : 0 }}
                    >
                      <File name={file} onClick={() => onFileClick(file)} />
                    </div>
                  </Collapse>
                ))}
              </div>
              <button className="load__button" onClick={onImageUpload}>
                <SvgUpload className="load__button-icon" />
                <span className="load__button-text">Datei(en) auswählen</span>
              </button>
              <p className="load__manual">
                Maximale Dateigröße pro Datei: 6MB. Unterstützte Dateitypen: PDF, JPG, JPEG, GIF, PNG.
              </p>
              {multi ? (
                <>
                  <hr className="load__line" />
                  <p className="load__rename">Möchten Sie dieses Dokument benennen?</p>
                  <Input
                    id="file-name"
                    name="file-name"
                    placeholder="z.B. Mahnung, Forderungsaufstellung, ..."
                    onChange={onFileNameChange}
                  />
                  <p className="load__tip">Leer lassen wenn unsicher</p>
                </>
              ) : null}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="load__save">
        <Collapse opened={files.length > 0}>
          <Button text={buttonName(title, 2)} onClick={saveFiles} />
        </Collapse>
      </div>
    </div>
  );
}

export default LoadModal;
