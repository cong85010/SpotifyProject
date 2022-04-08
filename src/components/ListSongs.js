import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Songs } from "../Context";
import { getlistSongs, songsSelector } from "../redux/slice/songsSlice";

export default function ListSongs() {
  const dispatch = useDispatch();
  const { songs } = useSelector(songsSelector);
  console.log(songs);
  // const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    // handleSetSong(idSong)
  };
  // useEffect(() => {
  //   setidSong(song.id)
  // }, [song])
  useEffect(() => {
    dispatch(getlistSongs());
  }, []);
  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
                idSong === song.id && "bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
